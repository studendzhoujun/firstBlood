/*
 * @Author: zhaoye 
 * @Date: 2017-04-12 13:22:52 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-04-12 14:10:53
 */
const express = require('express');
const router = express.Router();
const babel = require('babel-core');
const path = require('path')
const fs = require('fs')
const sourceMap = require('source-map');

const toposort = require('../../lib/toposort.js')


const watchList = new Map()

router.get('/', (req, res)  => {
    res.render('index')
})

router.get('/lithe.js', (req, res, next) => {
    res.send(`
    (function(){
        var el = document.querySelector('[data-main]')
        var entry = el.getAttribute('data-main')
        var dom = document.createElement('script')
        dom.src="require?path="+entry
        document.body.appendChild(dom)
    })();
    `)
    res.end();
})

/* GET home page. */
router.get('/require', (req, res, next) => {
    const sorted = toposort(req.query.path)
    // const script = `
    //     var deps = `+ JSON.stringify(result)+`;
    // `
    const file = fs.readFileSync(path.resolve(__dirname, '../../lib/define.js'))
    const contents = String(file).replace(/\{\{deps\}\}/, JSON.stringify(sorted))
    res.send(contents)
});

router.get('/*.js|node_modules*.js', (req, res, next) => {
    let filepath
    if(req.path.match('node_modules')){
        filepath = path.resolve(__dirname , '../..', req.path.replace(/^\//,''))
    }
    else{
        filepath = path.resolve(__dirname , '../../src', req.path.replace(/^\//,''))
    }
    fs.readFile(filepath, (err, file) => {
        let contents = String(file)
            contents = 'define("'+req.path.replace(/^\//,'')+'",function(require, exports, module){\n' + contents + '\n});'
            const result = babel.transform(contents,{
                presets:["es2015"],
                babelrc: false,
                sourceMaps: 'inline',
                retainLines: true,
                sourceRoot: 'debug://'+path.dirname(req.path),
                filenameRelative:  req.path,
            })
            res.send(new Buffer(result.code))
            res.end()
    })
    
    //console.log(result.map)
    //result.code += `//@ sourceURL=data:application/json;charset=utf-8;base64,`+new Buffer(JSON.stringify(result.map)).toString('base64');
    
});

module.exports = router;
