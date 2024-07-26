import { Component, input, Input } from '@angular/core';
import { Student } from '../../interfaces/student';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  @Input() student!:Student; // Not null
}
