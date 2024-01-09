export default function getStudentIdsSum(students) {
  let idsSum = 0;
  if (students instanceof Array) {
    idsSum = students.reduce((prevValue, obj) => prevValue + obj.id, 0);
  }
  return idsSum;
}
