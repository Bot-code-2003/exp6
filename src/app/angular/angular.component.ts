import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-angular',
  standalone: false,

  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css',
  providers: [EnrollService],
})
export class AngularComponent {
  title = 'Angular';

  constructor(private enrollService: EnrollService) {}

  OnEnroll() {
    this.enrollService.onEnrollClicked(this.title);
  }
}
