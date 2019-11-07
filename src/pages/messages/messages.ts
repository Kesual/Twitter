import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage implements OnInit{

  constructor(
    public navCtrl: NavController,
    private client: HttpClient
  ) {
  }

  public test: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }

  ngOnInit(): void {
    console.log('----------------');
    //this.get().subscribe(data => this.test = data);
  }

  get(){
    this.client.get('http://192.168.178.21:8001/api/message/5')
      .subscribe(
        data => {
          console.log('success', data);
          this.test = data[0].name;
          },
        error => console.log('oops', error));
  }

}
