import { Component } from '@angular/core';
import { ViewController} from "ionic-angular";
import { User } from "../user";
import { Member } from "../member";

@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})

export class MyListPage {
    // members;
    public users:User[]=[
        {name:"zs",passWord:"123"},
        {name:"ls",passWord:"12543"},
        {name:"ww",passWord:"456"},
        {name:"zl",passWord:"798"},
    ]

    public members:Member[]=[
        { name: '三傻', discrip: '来自冰与火之歌', image: 'assets/img/samsa_head.jpg', type: 'friend' },
        { name: '大头', discrip: '意大利摄影师的作品', image: 'assets/img/cry1.jpg', type: 'friend' },
        { name: '蓬蓬头', discrip: '一个黑人小姑凉', image: 'assets/img/cry2.jpg', type: 'friend' },
        { name: '面具', discrip: '傩神面具', image: 'assets/img/mask.jpg', type: 'interest' },
        { name: '老奶奶', discrip: '姜还是老的辣', image: 'assets/img/nana_head.jpg', type: 'interest' }
    ]

    constructor( public viewCtrl: ViewController) { }
    dismiss() {
        this.viewCtrl.dismiss();
    }
}