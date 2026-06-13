import { Component } from '@angular/core';
import { DatePicker } from "../date-picker/date-picker";
import { TimePicker } from '../time-picker/time-picker';
import { MailService } from '../mail-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-date-time-component',
  imports: [DatePicker, TimePicker],
  templateUrl: './date-time-component.html',
  styleUrl: './date-time-component.scss',
})
export class DateTimeComponent {
  constructor(private mailService: MailService, private router: Router) {}

  date: Date | null = null;
  time: Date | null = null;
  showMessage: boolean = false;

  onSubmit() {
    if(!this.date || !this.time) {
      this.showMessage = true;
      return;
    }

    this.mailService.sendMail(this.date, this.time).then(() => {
      this.router.navigate(['/success']);
    })
    .catch(() => {
      alert("Sorry, etwas ist schiefgelaufen. Versuche es nochmal (ich bin dumm).")
  });
  }

  dateChanged(newDate: Date) {
    this.date = newDate;
  }

  timeChanged(newTime: Date) {
    this.time = newTime;
  }
}
