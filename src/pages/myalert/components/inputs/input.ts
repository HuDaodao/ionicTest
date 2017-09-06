import { Component } from '@angular/core';
import {  FormGroup,FormBuilder,Validators,AbstractControl} from "@angular/forms";
import { NavController } from "ionic-angular";
import { MyCardPage } from "../cards/mycard";
import { User } from "../user";
import { Events } from "ionic-angular";
import { LoadingController } from "ionic-angular";

@Component({
    selector: 'page-input',
    templateUrl: 'input.html'
})

export class MyInputPage  {
    public form:FormGroup;
    public name:AbstractControl;
    public passWord:AbstractControl;
    public submitted: boolean = false;
    
    constructor(public loadingCtrl:LoadingController,public navCtrl:NavController,formBuilder:FormBuilder,public event:Events) {
        this.form=formBuilder.group({
            'name':['',Validators.compose([Validators.required,Validators.maxLength(5)])],
            'passWord':['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(15)])],
        });
        this.name=this.form.controls['name'];
        this.passWord=this.form.controls['passWord'];
     }

     public onSubmit(values:User):void{
        this.loadingCtrl.create({
            content:'正在加载……',
            duration:3000,
            dismissOnPageChange:true,
        }).present();
         this.submitted=true;
         if(this.form.valid){
             this.event.publish('UserLogin',values,Date.now())
             this.navCtrl.push(MyCardPage)
         }
     }

}