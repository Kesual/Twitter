import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'evening',
  templateUrl: 'evening.html'
})
export class EveningComponent {

  holder = 'Schreibe hier deine Nachricht hin...';
  evening = new FormControl('',[Validators.maxLength(280)]);
  max: any = 280;
  success;

  constructor(
    private client: HttpClient
  ) {}

  toString(value): string {
    return '' + value + '';
  }

  send() {
    this.client.post('http://192.168.178.29:8001/api/message', {data: this.evening.value})
      .subscribe(
        data => {
          console.log('success', data);
          this.success = 'Success';
        },
        error => console.log('oops', error));
  }

}
