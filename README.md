

[Hoo'](https://www.npmjs.com/package/hoo-generator) application generator.

[![NPM Version][npm-image]][npm-url]
[![Linux Build][travis-image]][travis-url]
[![Windows Build][appveyor-image]][appveyor-url]

## Installation

```sh
$ npm install -g hoo-generator
```

## Quick Start

The quickest way to get started with hoo-generator is to utilize the executable `hoo(1)` to generate an application as shown below:

Create the app:

```bash
$ hoo -i <name> && cd name
```

Install dependencies:

```bash
$ npm install
```

Start your serve.js at `http://localhost:3000/`:

```bash
$ npm start
```

## Command Line Options

This hoo-generator can also be further configured with the following command line flags.

    -h, --help          output usage information
        --version       output the version number
    -i, --init          init a project
## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express-generator.svg
[npm-url]: https://npmjs.org/package/express-generator
[travis-image]: https://img.shields.io/travis/expressjs/generator/master.svg?label=linux
[travis-url]: https://travis-ci.org/expressjs/generator
[appveyor-image]: https://img.shields.io/appveyor/ci/dougwilson/generator/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/generator
[downloads-image]: https://img.shields.io/npm/dm/express-generator.svg
[downloads-url]: https://npmjs.org/package/express-generator
[gratipay-image]: https://img.shields.io/gratipay/dougwilson.svg
[gratipay-url]: https://gratipay.com/dougwilson/
