/// <reference path="./subjects/Cpp.ts"> 
/// <reference path="./subjects/React.ts"> 
/// <reference path="./subjects/Java.ts">
/// <reference path="./subjects/Teacher.ts">

export const cpp = new Subjects.Cpp(); 
export const java = new Subjects.Java();
export const react = new Subjects.React();
export const cTeacher = {
  firstName: "chukwuma",
  lastName: "somtochukwu", 
  experienceTeachingC: 10,
}
console.log("c++"); 
cpp.setTeacher = cTeacher; 
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("java"); 
java.setTeacher = cTeacher; 
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
