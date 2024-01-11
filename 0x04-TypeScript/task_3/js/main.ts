/// <reference path="./crud.d">
import {RowID, RowElement} from './interface'; 
import * as CRUD from './crud';
 
const row: RowElement = {
  firstName: 'Guillaume', 
  lastName: 'Salva',
}; 

const newRowId: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {...row, age: 23};
CRUD.updateRow(newRowId, row); 
CRUD.deleteRow(newRowId) 
