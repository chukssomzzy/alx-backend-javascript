"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentClass = exports.printTeacher = void 0;
function printTeacher(firstName, lastName) {
    return firstName[0] + '. ' + lastName;
}
exports.printTeacher = printTeacher;
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently Working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
exports.StudentClass = StudentClass;
