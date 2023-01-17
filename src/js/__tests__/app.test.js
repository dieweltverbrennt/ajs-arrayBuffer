import ArrayBufferConverter, { getBuffer } from '../app';

const buffer = getBuffer();

test('load method should work correctly', () => {
  ArrayBufferConverter.load(buffer);
  expect(ArrayBufferConverter.buffer).toEqual(buffer);
});

test('toString method should return correct sttring', () => {
  ArrayBufferConverter.load(buffer);
  const result = ArrayBufferConverter.toString();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(result).toBe(expected);
});
