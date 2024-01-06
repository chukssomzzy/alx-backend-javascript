export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('Name must be a String');
    }

    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('Length must be a number');
    }

    if (students instanceof Array) {
      for (const student of students) {
        if (typeof student !== 'string') {
          throw new Error('Student must be an array of string');
        }
      }
      this._students = students;
    } else {
      throw new Error('Student must be an array of string');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (students instanceof Array) {
      for (const student in students) {
        if (typeof student !== 'string') {
          throw new Error('Students must be an array of string');
        }
      }
      this._students = students;
    } else {
      throw new Error('Student must be an array of strings');
    }
  }
}
