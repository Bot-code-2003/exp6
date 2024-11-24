import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-javascript',
  standalone: false,

  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.css',

  providers: [EnrollService],
})
export class JavascriptComponent {
  title = 'JavaScript';

  constructor(private enrollService: EnrollService) {}

  onEnroll() {
    this.enrollService.onEnrollClicked(this.title);
  }
}
