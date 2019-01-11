# byte-range

> Returns integer ranges for C data types

[![Build Status](https://travis-ci.com/lukechilds/byte-range.svg?branch=master)](https://travis-ci.com/lukechilds/byte-range)
[![Coverage Status](https://coveralls.io/repos/github/lukechilds/byte-range/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/byte-range?branch=master)
[![npm](https://img.shields.io/npm/v/byte-range.svg)](https://www.npmjs.com/package/byte-range)

Returns the integer range for a given number of bytes or C data types. This is useful for validating values when dealing with low-level protocols or interfacing with other low-level languages.

## Install

```shell
npm install byte-range
```

## Usage

Check the integer range for a given number of bytes:

```js
const byteRange = require('byte-range');

byteRange(1);
// [0, 255]
byteRange(2);
// [0, 65535]
```

You can check signed or unsigned integer ranges:

```js
byteRange(1, {signed: false});
// [0, 255]
byteRange(1, {signed: true});
// [-128, 127]
```

There are also some common C data types precomputed:

```js
byteRange.uint8;
// [0, 255]
byteRange.uint16;
// [0, 65535]
byteRange.uint32;
// [0, 4294967295]
byteRange.int8;
// [-128, 127]
byteRange.int16;
// [-32768, 32767]
byteRange.int32;
// [-2147483648, 2147483647]
```

## License

MIT © Luke Childs
