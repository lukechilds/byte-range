const byteRange = (bytes, signed = false) => {
	let min = 0;
	let max = Math.pow(2, (bytes * 8)) - 1;

	if (signed) {
		const offset = ((max + 1) / 2);
		min -= offset;
		max -= offset;
	}

	return [min, max];
};

module.exports = byteRange;
