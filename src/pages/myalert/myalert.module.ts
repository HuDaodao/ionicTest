import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
// import { MyalertPage } from "./index";
import { MyalertPage } from './components/basic/myalert';
import { MyCardPage } from './components/cards/mycard';
import { MyDatetimePage } from './components/datetime/datetime';
import { MyFabs } from './components/fabs/fabs';
import { MyInputPage } from './components/inputs/input';
import { BasicPage,ModalContentPage } from './components/menus/menu';
import { MyPopoverBasicPage,PopoverPage } from './components/popovers/popover';
import { MyListPage } from './components/list/list';

const _components=[MyalertPage,MyCardPage,MyDatetimePage,
                  MyFabs,MyInputPage,BasicPage,ModalContentPage,
                  MyPopoverBasicPage,PopoverPage,MyListPage];

@NgModule({
  declarations: [..._components],
  imports: [
    IonicPageModule.forChild(MyalertPage),
    IonicPageModule.forChild(MyCardPage),
    IonicPageModule.forChild(MyDatetimePage),
    IonicPageModule.forChild(MyFabs),
    IonicPageModule.forChild(MyInputPage),
    IonicPageModule.forChild(BasicPage),
    IonicPageModule.forChild(ModalContentPage),
    IonicPageModule.forChild(MyPopoverBasicPage),
    IonicPageModule.forChild(MyListPage),
  ],
  entryComponents:[..._components]
})
export class MyalertPageModule {}
