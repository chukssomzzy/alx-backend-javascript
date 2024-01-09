export default function updateUniqueItems(map) {
  const mapRe = map;
  if (map instanceof Map) {
    for (const [key, val] of map) {
      if (typeof val === 'number' && val === 1) {
        mapRe.set(key, 100);
      } else if (val === 1) {
        throw new Error('Cannot process');
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return mapRe;
}
