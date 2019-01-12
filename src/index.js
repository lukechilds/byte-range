const {MIN_SAFE_INTEGER, MAX_SAFE_INTEGER} = Number;

const byteRange = (bytes, opts) => {
	opts = {
		signed: false,
		...opts
	};

	if (bytes < 1 || !Number.isSafeInteger(bytes)) {
		throw new TypeError('`bytes` must be a positive integer');
	}

	let min = 0;
	let max = (2 ** (bytes * 8)) - 1;

	if (opts.signed) {
		const offset = ((max + 1) / 2);
		min -= offset;
		max -= offset;
	}

	if (min < MIN_SAFE_INTEGER || max > MAX_SAFE_INTEGER) {
		throw new RangeError('This range connot be safely calculated in JavaScript');
	}

	return [min, max];
};

const unsigned = {signed: false};
byteRange.uint8 = byteRange(1, unsigned);
byteRange.uint16 = byteRange(2, unsigned);
byteRange.uint32 = byteRange(4, unsigned);

const signed = {signed: true};
byteRange.int8 = byteRange(1, signed);
byteRange.int16 = byteRange(2, signed);
byteRange.int32 = byteRange(4, signed);

module.exports = byteRange;
