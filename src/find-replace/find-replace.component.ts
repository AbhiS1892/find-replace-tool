import { Component } from '@angular/core';

@Component({
  selector: 'app-find-replace',
  templateUrl: './find-replace.component.html',
  styleUrls: ['./find-replace.component.scss']
})
export class FindReplaceComponent {
  text: string = '';
  findText: string = '';
  replaceText: string = '';
  message: string = '';
  errorMessage: string = '';

  replaceTextInInput() {
    // Clear previous messages
    this.errorMessage = '';
    this.message = '';

    // Check for missing inputs
    if (!this.findText) {
      this.errorMessage = 'Please enter the word/phrase to find.';
    } else if (!this.text) {
      this.errorMessage = 'Please enter the text in the textbox.';
    } else if (!this.replaceText) {
      this.errorMessage = 'Please enter the replacement word/phrase.';
    }

    // If there's an error, exit the method
    if (this.errorMessage) return;

    // Perform the find and replace operation
    const regex = new RegExp(this.findText, 'g');
    const replacedText = this.text.replace(regex, this.replaceText);

    // Handle no match found
    if (this.text === replacedText) {
      this.errorMessage = 'No matches found!';
    } else {
      this.text = replacedText;
      this.message = 'Replacement successful!';
    }
  }

  reset() {
    // Clear all input fields and messages
    this.text = '';
    this.findText = '';
    this.replaceText = '';
    this.message = '';
    this.errorMessage = '';
  }

  isTextEmpty() {
    return !(this.findText || this.text || this.replaceText);
  }
}
