import test from 'ava';
import byteRange from '..';

test('byteRange is exported', t => {
	t.not(byteRange, undefined);
});

test('byteRange(n, false) returns expected values for unsigned integers', t => {
	const opts = {signed: false};

	t.deepEqual(byteRange(1, opts), [0, 255]);
	t.deepEqual(byteRange(2, opts), [0, 65535]);
	t.deepEqual(byteRange(3, opts), [0, 16777215]);
	t.deepEqual(byteRange(4, opts), [0, 4294967295]);
	t.deepEqual(byteRange(5, opts), [0, 1099511627775]);
	t.deepEqual(byteRange(6, opts), [0, 281474976710655]);
});

test('byteRange(n, true) returns expected values for signed integers', t => {
	const opts = {signed: true};

	t.deepEqual(byteRange(1, opts), [-128, 127]);
	t.deepEqual(byteRange(2, opts), [-32768, 32767]);
	t.deepEqual(byteRange(3, opts), [-8388608, 8388607]);
	t.deepEqual(byteRange(4, opts), [-2147483648, 2147483647]);
	t.deepEqual(byteRange(5, opts), [-549755813888, 549755813887]);
	t.deepEqual(byteRange(6, opts), [-140737488355328, 140737488355327]);
});

test('byteRange(n) defaults to unsigned integers', t => {
	t.deepEqual(byteRange(1), byteRange(1, {signed: false}));
});

test('byteRange() throws invalid byte values', t => {
	t.throws(() => byteRange(-1));
	t.throws(() => byteRange(0));
	t.throws(() => byteRange(1.5));
});

test('byteRange() throws on unsafe ranges', t => {
	t.throws(() => byteRange(100));
});
