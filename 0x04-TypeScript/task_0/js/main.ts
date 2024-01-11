export interface Student {
  firstName: string; 
  lastName: string; 
  age: number;
  location: string;
};

const student1: Student = {
  firstName: 'Chukwuma', 
  lastName: 'Emmanuel', 
  age: 23, 
  location: 'Lagos'
}

const student2: Student = {
  firstName: 'Somtochukwu', 
  lastName: 'Emmanuel', 
  age: 23, 
  location: 'Lagos'
}

const studentList = [student1, student2]; 

export const generateTable = function (studentList: Array<Student>): HTMLTableElement {
  const table = document.createElement("table"); 
  const tableHead = document.createElement("thead"); 
  const tableRow = document.createElement("tr");
  const tableBody = document.createElement('tbody');
  tableRow.insertAdjacentHTML('beforeend', '<th>firstName</th>'); 
  tableRow.insertAdjacentHTML('beforeend', '<th>location</th>'); 
  tableHead.insertAdjacentElement('beforeend', tableRow); 

  for (const student of studentList) {
    const tableRow = document.createElement('tr');
    tableRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    tableRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`); 
    tableBody.appendChild(tableRow);
  }
  table.appendChild(tableHead);
  table.appendChild(tableBody); 
  return table;
}

document.title = 'Task 0'; 
document.body.appendChild(generateTable(studentList)); 
