# byte-range

> Returns integer ranges for a given number of bytes.

[![Build Status](https://travis-ci.com/lukechilds/byte-range.svg?branch=master)](https://travis-ci.com/lukechilds/byte-range)
[![Coverage Status](https://coveralls.io/repos/github/lukechilds/byte-range/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/byte-range?branch=master)
[![npm](https://img.shields.io/npm/v/byte-range.svg)](https://www.npmjs.com/package/byte-range)

Returns the integer range for a given number of bytes or a C data type. This is useful for validating values when dealing with low-level protocols or interfacing with other low-level languages.

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

## API

### byteRange(bytes, [options])

Returns integer ranges for a given number of bytes.

#### bytes

Type: `number`<br />
Default: `undefined`

Number of bytes to return the integer range for. Must be a positive integer.

#### options

Type: `Object`<br />
Default: `{signed: false}`

An object containing the following properties:

##### signed

Type: `boolean`<br>
Default: `false`

A boolean indicating whether the integer range is signed.

### byteRange.uint8

Precomputed byte range for an unsigned 8 bit integer.

### byteRange.uint16

Precomputed byte range for an unsigned 16 bit integer.

### byteRange.uint32

Precomputed byte range for an unsigned 32 bit integer.

### byteRange.int8

Precomputed byte range for a signed 8 bit integer.

### byteRange.int16

Precomputed byte range for a signed 16 bit integer.

### byteRange.int32

Precomputed byte range for a signed 32 bit integer.

## License

MIT © Luke Childs
