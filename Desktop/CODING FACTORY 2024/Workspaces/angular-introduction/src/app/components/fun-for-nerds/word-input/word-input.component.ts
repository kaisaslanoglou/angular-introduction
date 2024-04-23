import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-word-input',
  standalone: true,
  imports: [],
  templateUrl: './word-input.component.html',
  styleUrl: './word-input.component.css'
})
export class WordInputComponent {
  @Output() partialWord = new EventEmitter<string>();
  @Output() word = new EventEmitter<string>();

  currentWord: string = '';

  onInput(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.partialWord.emit(input)
    this.currentWord = input;
  
  }
  
  onSubmit() {
    this.word.emit(this.currentWord);
  }
}
