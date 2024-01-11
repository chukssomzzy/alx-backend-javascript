/// <reference path="Teacher.ts"> 
/// <reference path="Subjects.ts"

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }; 

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for java';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingJava) {
        return `Available teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
