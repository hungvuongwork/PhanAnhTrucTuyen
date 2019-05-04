import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

//My Modal
import { ThanhPhanHoSoPage } from '../modals/thanh-phan-ho-so/thanh-phan-ho-so.page';

@Component({
  selector: 'app-nop-ho-so-submitdoc',
  templateUrl: './nop-ho-so-submitdoc.page.html',
  styleUrls: ['./nop-ho-so-submitdoc.page.scss'],
})
export class NopHoSoSubmitdocPage implements OnInit {

  async openThanhPhanHS() {
    const modal = await this.modalCtrl.create({
      component: ThanhPhanHoSoPage,
      //componentProps: { value: 123 }
    });

    return await modal.present();
  }

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

}
