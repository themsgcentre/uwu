import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  imports: [FormsModule],
  templateUrl: './date-picker.html',
  styleUrl: './date-picker.scss',
})
export class DatePicker {
  date: Date | null = null;
  @Output() dateSubmitted: EventEmitter<Date> = new EventEmitter<Date>();
  constructor() {}

  onChanged() {
    if(this.date) {
      this.dateSubmitted.emit(this.date)
    }
  }
}
