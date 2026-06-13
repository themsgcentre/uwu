import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-time-picker',
  imports: [FormsModule],
  templateUrl: './time-picker.html',
  styleUrl: './time-picker.scss',
})
export class TimePicker {

  time: Date | null = null;
  @Output() timeChanged: EventEmitter<Date> = new EventEmitter<Date>();

  onChanged() {
    if(this.time) {
      this.timeChanged.emit(this.time)
    }
  }
}
