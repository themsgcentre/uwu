import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-component',
  imports: [],
  templateUrl: './start-component.html',
  styleUrl: './start-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartComponent {

  constructor(private router: Router) {}

  showMessage: boolean = false;

  onYes() {
      this.router.navigateByUrl('/date-time')
  }

  onNo() {
    this.showMessage = true;
  }
}
