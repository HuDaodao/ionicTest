import { Component } from '@angular/core';

import { App, MenuController, Platform, ModalController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class BasicPage {
  constructor(app: App, menu: MenuController, public modalCtrl: ModalController) {
    menu.enable(true);
  }

  public tap:number=0;
tapEvent(e){
console.log('123');
    this.tap++;
  }
  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

  
}


@Component({
  selector: 'page-modal',
  template:`<ion-header>
    <ion-toolbar>
      <ion-title>
        介绍
      </ion-title>
      <ion-buttons start>
        <button ion-button (click)="dismiss()">
            <span ion-text color="primary" showWhen="ios">Cancel</span>
            <ion-icon>×</ion-icon>
          </button>
      </ion-buttons>
    </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item>
          <ion-avatar item-start>
            <img src="{{character.image}}">
          </ion-avatar>
          <h2>{{character.name}}</h2>
          <p>{{character.quote}}</p>
        </ion-item>

        <ion-item *ngFor="let item of character['items']">
          {{item.title}}
          <ion-note item-end>
            {{item.value}}
          </ion-note>
        </ion-item>
      </ion-list>
    </ion-content>`
})
export class ModalContentPage {
  character;
  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {
    let characters = [
      {
        name: '小恶魔',
        quote: '这是一段引述……',
        discrip:'kills his father',
        image: 'assets/img/avatar-samwise.jpg',
        items: [
          { title: '身高', value: '100cm' },
          { title: '家徽', value: '黄金狮子' },
          { title: '所在地', value: '黑水的另一端' },
        ]
      },
      {
        name: '荆棘女王',
        quote: '这是另一段引述……',
        discrip:'有个了不起的孙女',
        image: 'assets/img/nana_head.jpg',
        items: [
          { title: '身高', value: '167cm' },
          { title: '家徽', value: '金玫瑰' },
          { title: '所在地', value: '王城' },
        ]
      },
      {
        name: '三傻',
        quote: '这是三傻的一段引述……',
        discrip:'正式逆袭',
        image: 'assets/img/samsa_head.jpg',
        items: [
          { title: '身高', value: '177cm' },
          { title: '家徽', value: '他家已经没了' },
          { title: '所在地', value: '长城' },
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}