export interface Teacher {
  readonly firstName: string; 
  readonly lastName: string; 
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; 
  location: string; 
  [key: string]: any;
}

export interface Director extends Teacher {
  numberOfReport: number;
}

export interface printTeacherFunction {
  printTeacher(firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
  return firstName[0] + '. ' + lastName;
}

export interface IStudentClass {
  workOnHomework(): string; 
  displayName(): string;
}

export interface IStudent {
  new (firstName:string, lastName: string): IStudent;
}

export class StudentClass implements IStudentClass {
  firstName: string; 
  lastName: string; 

  constructor (firstName: string, lastName: string) {
    this.firstName = firstName; 
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently Working';
  }

  displayName(): string {
    return this.firstName;
  }
}
