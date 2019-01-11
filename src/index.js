const byteRange = bytes => [0, Math.pow(2, (bytes * 8)) - 1];

module.exports = byteRange;
