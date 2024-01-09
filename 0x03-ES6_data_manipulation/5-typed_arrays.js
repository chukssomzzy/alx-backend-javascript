export default function createInt8TypedArray(length, position, value) {
  const buf = new ArrayBuffer(length);
  const int8Buff = new Int8Array(buf);

  int8Buff[position] = value;
  return buf;
}
