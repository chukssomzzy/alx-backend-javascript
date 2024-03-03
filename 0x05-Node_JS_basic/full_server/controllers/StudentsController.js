import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const studentsByField = await readDatabase(process.argv[2]);
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
    } catch {
      response.status(500).send('Cannot load the database');
    }

  }

  static async getAllStudentsByMajor(request, response) {
    try {
      if (request.params.major !== 'SWE' && request.params.major !== 'CS') {
        response.status(500).send('Major parameter must be CS or SWE');
      }
      const studentsByField = await readDatabase(process.argv[2]);
      response.send(`List: ${studentsByField[request.params.major].length}`)
    } catch {
      response(500).send('Cannot load the database');
    }
  }
}
