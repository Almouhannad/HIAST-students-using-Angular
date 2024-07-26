import { Injectable } from '@angular/core';
import { Student } from '../../interfaces/student';

@Injectable({
  providedIn: 'root' // It can be injected everywhere
})
export class StudentsService {
  protected students:Student[] = [
    {
      "id": 0,
      "firstName": "Almouhannad",
      "lastName": "Hafez",
      "city": "Banias",
      "year": 4,
      "phoneNumber": "0909090909"
    },
    {
      "id": 1,
      "firstName": "Aram",
      "lastName": "Mouhammad",
      "city": "Lattakia",
      "year": 4, 
      "phoneNumber": "0909090909"
    },
    {
      "id": 2,
      "firstName": "Rawad",
      "lastName": "Rabie",
      "city": "Damascus",
      "year": 4,
      "phoneNumber": "0909090909"
    },
    {
      "id": 3,
      "firstName": "Ahmad",
      "lastName": "Ali",
      "city": "Damascus",
      "year": 4,
      "phoneNumber": "0909090909"
    },
    {
      "id": 4,
      "firstName": "Mouhammad Nour",
      "lastName": "Ali",
      "city": "Damascus",
      "year": 4,
      "phoneNumber": "0909090909"
    },
    {
      "id": 5,
      "firstName": "Mouhammad",
      "lastName": "Alloush",
      "city": "Damascus",
      "year": 4,
      "phoneNumber": "0909090909"
    },
    {
      "id": 6,
      "firstName": "Alhaitham",
      "lastName": "Salloum",
      "city": "Damascus",
      "year": 4,
      "phoneNumber": "0909090909"
    },
    {
      "id": 7,
      "firstName": "Ammer",
      "lastName": "Abuammar",
      "city": "Damascus",
      "year": 4,
      "phoneNumber": "0909090909"
    },

  ];
  constructor() { }

  getAllStudents() : Student[] {
    return this.students;
  }

  getStudentById(id :Number) : Student | undefined {
    return this.students.find(student => student.id === id);
  }
}
