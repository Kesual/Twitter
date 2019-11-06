import { Component } from '@angular/core';

/**
 * Generated class for the EveningComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'evening',
  templateUrl: 'evening.html'
})
export class EveningComponent {

  text: string;

  constructor() {
    console.log('Hello EveningComponent Component');
    this.text = 'Hello World';
  }

}
