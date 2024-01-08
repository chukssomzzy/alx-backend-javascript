export default function getStudentsByLocation(students, city) {
  let studentByCity = [];

  if (students instanceof Array && typeof city === 'string') {
    studentByCity = students.filter((student) => student.location === city);
  }
  return studentByCity;
}
