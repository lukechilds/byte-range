import test from 'ava';
import byteRange from '..';

test('byteRange is exported', t => {
	t.not(byteRange, undefined);
});

test('byteRange(n, false) returns expected values for unsigned integers', t => {
	const unsigned = {signed: false};

	t.deepEqual(byteRange(1, unsigned), [0, 255]);
	t.deepEqual(byteRange(2, unsigned), [0, 65535]);
	t.deepEqual(byteRange(3, unsigned), [0, 16777215]);
	t.deepEqual(byteRange(4, unsigned), [0, 4294967295]);
	t.deepEqual(byteRange(5, unsigned), [0, 1099511627775]);
	t.deepEqual(byteRange(6, unsigned), [0, 281474976710655]);
});

test('byteRange(n, true) returns expected values for signed integers', t => {
	const signed = {signed: true};

	t.deepEqual(byteRange(1, signed), [-128, 127]);
	t.deepEqual(byteRange(2, signed), [-32768, 32767]);
	t.deepEqual(byteRange(3, signed), [-8388608, 8388607]);
	t.deepEqual(byteRange(4, signed), [-2147483648, 2147483647]);
	t.deepEqual(byteRange(5, signed), [-549755813888, 549755813887]);
	t.deepEqual(byteRange(6, signed), [-140737488355328, 140737488355327]);
});

test('byteRange(n) defaults to unsigned integers', t => {
	t.deepEqual(byteRange(1), byteRange(1, {signed: false}));
});

test('precomputed byteRange.x range helpers are correct', t => {
	const unsigned = {signed: false};
	t.deepEqual(byteRange.uint8, byteRange(1, unsigned));
	t.deepEqual(byteRange.uint16, byteRange(2, unsigned));
	t.deepEqual(byteRange.uint32, byteRange(4, unsigned));

	const signed = {signed: true};
	t.deepEqual(byteRange.int8, byteRange(1, signed));
	t.deepEqual(byteRange.int16, byteRange(2, signed));
	t.deepEqual(byteRange.int32, byteRange(4, signed));
});

test('byteRange() throws invalid byte values', t => {
	t.throws(() => byteRange(-1));
	t.throws(() => byteRange(0));
	t.throws(() => byteRange(1.5));
});

test('byteRange() throws on unsafe ranges', t => {
	t.throws(() => byteRange(100));
});
