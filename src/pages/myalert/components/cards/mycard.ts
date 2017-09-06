import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { User } from "../user";

@Component({
  selector: 'page-mycard',
  templateUrl: 'mycard.html',
})
export class MyCardPage {
  currentUserName: string;
  constructor(public NavController: NavController, public event: Events) {
    this.event.subscribe('UserLogin', (user, time) => {
      this.currentUserName = user.name;
      console.log(this.currentUserName);
    })
  }
}
