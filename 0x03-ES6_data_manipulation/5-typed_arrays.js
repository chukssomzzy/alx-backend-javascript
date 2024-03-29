export default function createInt8TypedArray(length, position, value) {
  const buf = new ArrayBuffer(length);
  const int8Buff = new Int8Array(buf);

  if (value > 255 || position >= length) {
    throw new Error('Position outside range');
  }
  int8Buff[position] = value;
  return new DataView(buf);
}
