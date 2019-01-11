import test from 'ava';
import byteRange from '..';

test('byteRange is exported', t => {
	t.not(byteRange, undefined);
});

test('byteRange(n, false) returns expected values for unsigned integers', t => {
	const signed = false;

	t.deepEqual(byteRange(1, signed), [0, 255]);
	t.deepEqual(byteRange(2, signed), [0, 65535]);
	t.deepEqual(byteRange(3, signed), [0, 16777215]);
	t.deepEqual(byteRange(4, signed), [0, 4294967295]);
	t.deepEqual(byteRange(5, signed), [0, 1099511627775]);
	t.deepEqual(byteRange(6, signed), [0, 281474976710655]);
});
