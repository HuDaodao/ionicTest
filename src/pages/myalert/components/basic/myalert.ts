import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-myalert',
  templateUrl: 'myalert.html',
})
export class MyalertPage {

  constructor(public alertCtrl: AlertController) {
  }

  //基础弹框
  doAlert() {
    let alert = this.alertCtrl.create({
      title: '基础弹框',
      message: '这是一个基础弹框',
      buttons: ['OK']
    });
    alert.present()
  }

  //checkbox弹框
  testCheckboxOpen: Boolean;
  testCheckboxResult: any;
  doCheckbox() {
    let alertCheckbox = this.alertCtrl.create();
    alertCheckbox.setTitle('选择你喜欢的水果');
    alertCheckbox.addInput({
      type: 'checkbox',
      label: '苹果',
      value: '1',
      checked: false
    });
    alertCheckbox.addInput({
      type: 'checkbox',
      label: '橘子',
      value: '2',
      checked: false
    });
    alertCheckbox.addInput({
      type: 'radio',
      label: '猕猴桃',
      value: '3'
    });

    alertCheckbox.addInput({
      type: 'radio',
      label: '凤梨',
      value: '4'
    });

    alertCheckbox.addButton('取消');
    alertCheckbox.addButton({
      text: '确定',
      handler: data => {
        console.log('你选择的水果是：', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alertCheckbox.present().then(() => {
      this.testCheckboxOpen = true;
    });
  }

  //确认按钮
  doConfirm() {
    let alertConfirm = this.alertCtrl.create({
      title: '发现一根鸡肋',
      message: '是否食用？',
      buttons: [
        {
          text: '不食用',
          handler: () => {
            console.log('不食用');
          }
        },
        {
          text: '食用',
          handler: () => {
            console.log('食用');
          }
        }
      ]
    });
    alertConfirm.present();
  }

  //登录
  doPrompt() {
    let alertPrompt = this.alertCtrl.create({
      title: '登录',
      message: '填入名字和密码',
      inputs: [
        {
          name: 'name',
          placeholder: '姓名'
        },
        {
          name: 'passWord',
          placeholder: '密码'
        }
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log(data);
          }
        },
        {
          text: '保存',
          handler: data => {
            console.log(data);
          }
        }
      ]
    });
    alertPrompt.present();
  }
}
