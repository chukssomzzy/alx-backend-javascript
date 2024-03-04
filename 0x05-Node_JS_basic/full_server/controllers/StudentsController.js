import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(request, response) {
    readDatabase(process.argv[2]).then((studentsByField) => {
      let i = 0;
      response.statusCode = 200;
      response.write('This is the list of our students\n');
      for (const [field, names] of Object.entries(studentsByField)) {
        i += 1;
        response.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        if (i < Object.keys(studentsByField).length) {
          response.write('\n');
        }
      }
      response.end();
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static async getAllStudentsByMajor(request, response) {
    if (request.params.major !== 'SWE' && request.params.major !== 'CS') {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2]).then((studentsByField) => {
      response.send(`List: ${studentsByField[request.params.major].join(', ')}`);
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}
