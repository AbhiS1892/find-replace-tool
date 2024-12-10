import { Component } from '@angular/core';

@Component({
  selector: 'app-find-replace',
  templateUrl: './find-replace.component.html',
  styleUrl: './find-replace.component.scss'
})
export class FindReplaceComponent {
  text: string = '';
  findText: string = '';
  replaceText: string = '';
  message: string = '';
  errorMessage: string = '';

  replaceTextInInput() {
    if (!this.findText) {
      this.errorMessage = 'Please enter the word/phrase to find.';
      this.message = '';
      return;
    } else if (!this.text) {
      this.errorMessage = 'Please enter the text in the textbox.';
      this.message = '';
      return;
    } else if (!this.replaceText) {
      this.errorMessage = 'Please enter the replacement word/phrase.';
      this.message = '';
      return;
    }

    const regex = new RegExp(this.findText, 'g');
    const replacedText = this.text.replace(regex, this.replaceText);

    if (this.text === replacedText) {
      this.errorMessage = 'No matches found!';
    } else {
      this.text = replacedText;
      this.message = 'Replacement successful!';
      this.errorMessage = '';
    }
  }

  reset() {
    this.text = '';
    this.findText = '';
    this.replaceText = '';
    this.message = '';
    this.errorMessage = '';
  }

  isTextEmpty() {
    return (!this.findText && !this.text && !this.replaceText);
  }

}
