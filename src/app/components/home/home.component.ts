import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // important
import { StudentComponent } from '../student/student.component';
import { Student } from '../../interfaces/student';
import { StudentsService } from '../../services/students/students.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StudentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  students: Student[] = [];
  filteredStudents: Student[] = [];
  studentsService: StudentsService = inject(StudentsService);


  constructor() {
    this.studentsService.getAllStudents().then(
      (students: Student[]) => {
        this.students = students;
        this.filteredStudents = students;
      }
    )
  }

  filterStudents(text: string) {
    if (!text) this.filteredStudents = this.students;
    this.filteredStudents = this.students.filter(
      student => student?.firstName.toLowerCase().includes(text.toLowerCase())
    )
  }

  preventDefault($event: Event) {
    $event.preventDefault();
  }

}
