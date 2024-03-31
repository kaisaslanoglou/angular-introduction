import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding-example',
  standalone: true,
  imports: [],
  templateUrl: './event-binding-example.component.html',
  styleUrl: './event-binding-example.component.css'
})
export class EventBindingExampleComponent {
  times: number = 0;

  userInput: string = '';

  incrementTimes() {
    this.times++;
  }

  decrementTimes() {
    this.times--;
  }

  resetTimes() {
    this.times = 0;
  }

  onUserInput(event: Event) {
      const value = (event.target as HTMLInputElement).value;
      this.userInput = value;
  }
}
