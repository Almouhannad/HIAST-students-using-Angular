import { Component, Input } from '@angular/core';
import { Student } from '../../interfaces/student';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  @Input() student!:Student; // Not null
}
