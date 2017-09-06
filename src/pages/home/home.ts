import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyalertPage, MyCardPage, MyDatetimePage,
  MyFabs, MyInputPage, BasicPage, MyPopoverBasicPage, MyListPage
} from "../myalert/index";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  myAlert() {
    this.navCtrl.push(MyalertPage)
  }
  myCards() {
    this.navCtrl.push(MyCardPage)
  }
  myDatetime() {
    this.navCtrl.push(MyDatetimePage)
  }
  myFabs() {
    this.navCtrl.push(MyFabs)
  }
  myInput() {
    this.navCtrl.push(MyInputPage)
  }
  myMenu() {
    this.navCtrl.push(BasicPage)
  }
  myPopover(){
    this.navCtrl.push(MyPopoverBasicPage)
  }
  myListPage(){
    this.navCtrl.push(MyListPage)
  }
}
