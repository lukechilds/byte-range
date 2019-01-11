const byteRange = (bytes, signed = false) => {
	if (bytes < 1 || !Number.isSafeInteger(bytes)) {
		throw new TypeError('`bytes` must be a positive integer');
	}

	let min = 0;
	let max = (2 ** (bytes * 8)) - 1;

	if (signed) {
		const offset = ((max + 1) / 2);
		min -= offset;
		max -= offset;
	}

	return [min, max];
};

module.exports = byteRange;
