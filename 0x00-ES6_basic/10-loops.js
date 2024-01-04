export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];

  for (const value of array) {
    newArray = [...newArray, (appendString + value)];
  }

  return newArray;
}
