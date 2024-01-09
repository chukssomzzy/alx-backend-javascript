export default function updateStudentGradeByCity(students, city, newGrade) {
  let studentGrades = [];
  if (students instanceof Array && typeof city === 'string' && newGrade instanceof Array) {
    studentGrades = students.map((student) => {
      const reStudent = student;
      const grade = newGrade.find((grade) => grade.studentId === student.id) || 'N/A';
      if (grade !== 'N/A') {
        reStudent.grade = grade.grade;
      } else {
        reStudent.grade = grade;
      }
      return reStudent;
    }).filter((student) => student.location === city);
  }
  return studentGrades;
}
