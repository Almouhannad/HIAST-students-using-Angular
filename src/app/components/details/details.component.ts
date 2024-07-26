import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../interfaces/student';
import { StudentsService } from '../../services/students/students.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  studentService: StudentsService = inject(StudentsService);
  student: Student | undefined;

  constructor() {
    const studentId:Number = Number(this.route.snapshot.params['id']);
    this.student = this.studentService.getStudentById(studentId);
  }
}
