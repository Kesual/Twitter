import { Component } from '@angular/core';

/**
 * Generated class for the NewMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'new-message',
  templateUrl: 'new-message.html'
})
export class NewMessageComponent {

  text: string;

  constructor() {
    console.log('Hello NewMessageComponent Component');
    this.text = 'Hello World';
  }

}
