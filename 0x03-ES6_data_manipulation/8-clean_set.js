export default function cleanSet(set, startString) {
  let retString = '';

  for (const val of set) {
    const idx = val.indexOf(startString);
    if (idx !== -1 && startString.length !== 0) {
      retString += retString.length ? '-' : '';
      retString += val.slice(startString.length);
    }
  }
  return retString;
}
