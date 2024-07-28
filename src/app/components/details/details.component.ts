import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Student } from '../../interfaces/student';
import { StudentsService } from '../../services/students/students.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  studentService: StudentsService = inject(StudentsService);
  student: Student | undefined;

  editForm = new FormGroup(
    {
      firstName: new FormControl(''),
      lastName: new FormControl('')
    }
  )

  constructor() {
    const studentId: Number = Number(this.route.snapshot.params['id']);
    console.log(studentId);
    this.studentService.getStudentById(studentId).then(
      (student: Student | undefined) => {
        this.student = student;
        this.editForm.setValue({firstName:student?.firstName ?? '', lastName:student?.lastName ?? ''})
      }
    )
  }

  submitEdit() {
    const studentId: Number = Number(this.route.snapshot.params['id']);
    this.studentService.submitEdit(
      studentId,
      this.editForm.value.firstName ?? '', // ?? for dealing with null and undefined
      this.editForm.value.lastName ?? ''
    ).then( // Update editied student
      () => {
        this.studentService.getStudentById(studentId).then(
          (student: Student | undefined) => {
            this.student = student;
          }
        )
      }
    );
  }

}
