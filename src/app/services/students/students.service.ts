import { Injectable } from '@angular/core';
import { Student } from '../../interfaces/student';

@Injectable({
  providedIn: 'root' // It can be injected everywhere
})
export class StudentsService {

  url = 'http://localhost:3000/students';


  constructor() { }

  async getAllStudents(): Promise<Student[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getStudentById(id: Number): Promise<Student | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  async submitEdit(id: Number, firstName: string, lastName: string) {
    try {
      const student = await this.getStudentById(id);
      if (student) {
        student.firstName = firstName;
        student.lastName = lastName;
        const response = await fetch(`${this.url}/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(student)
        });
        const data = await response.json();
        console.log(data);
      } else {
        console.error('Student not found');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
