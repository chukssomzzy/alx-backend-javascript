export default function getListStudentIds(list) {
  if (list instanceof Array) {
    return list.map((obj) => obj.id);
  }
  return [];
}
