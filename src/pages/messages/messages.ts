import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams, private client: HttpClient) {
  }

  public test;

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }

  ngOnInit(): void {
    console.log('----------------');
    this.get().subscribe(data => this.test = data);
  }

  get(){
    return this.client.get('http://127.0.0.1:8000/api/message/4');
  }

}
