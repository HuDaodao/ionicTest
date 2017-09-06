import { Component } from '@angular/core';
import { ViewController, Platform, NavParams } from "ionic-angular";

@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})

export class MyListPage {

    list;
    constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {
        let list = [
            {
                member: [
                    {
                        name: '三傻',
                        discrip: '来自冰与火之歌',
                        image: 'assets/img/samsa_head.jpg',
                        type: 'friend'
                    },
                    {
                        name: '哭岔了',
                        discrip: '意大利摄影师的作品',
                        image: 'assets/img/cry1.jpg',
                        type: 'friend'
                    },
                    {
                        name: '蓬蓬头',
                        discrip: '一个黑人小姑凉',
                        image: 'assets/img/cry2.jpg',
                        type: 'friend'
                    },
                    {
                        name: '面具',
                        discrip: '傩神面具',
                        image: 'assets/img/mask.jpg',
                        type: 'interest'
                    },
                    {
                        name: '老奶奶',
                        discrip: '姜还是老的辣',
                        image: 'assets/img/nana_head.jpg',
                        type: 'interest'
                    }
                ]
            },

        ];
        this.list = list[this.params.get('charNum')];
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
}