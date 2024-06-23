/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-opening-sentence',
  templateUrl: './opening-sentence.component.html',
  styleUrls: ['./opening-sentence.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OpeningSentenceComponent),
      multi: true
    }
  ]
})
export class OpeningSentenceComponent implements ControlValueAccessor {
  sentence = signal('Hi, this is [agent_name]. I’m calling from [company_name], do you have a few minutes to answer some questions?');

  onChange = (sentence: string) => {};
  onTouched = () => {};

  writeValue(sentence: string): void {
    this.sentence.set(sentence);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.sentence.update((value) => fn(value));
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  insertPlaceholder(placeholder: string): void {
    const textarea = document.getElementById('sentence-input') as HTMLTextAreaElement;
    const cursorPos = textarea.selectionStart || 0;
    const currentSentence = this.sentence();
    this.sentence.set(currentSentence.slice(0, cursorPos) + placeholder + currentSentence.slice(cursorPos));
    this.onChange(this.sentence());
  }
}