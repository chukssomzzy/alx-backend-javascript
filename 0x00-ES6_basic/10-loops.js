 export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    array[idx] = appendString + value;
  }

  return array;
}
