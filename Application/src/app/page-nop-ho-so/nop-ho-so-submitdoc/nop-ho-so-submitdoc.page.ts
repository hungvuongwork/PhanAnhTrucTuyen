import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

//My Modal
import { ThanhPhanHoSoPage } from '../modals/thanh-phan-ho-so/thanh-phan-ho-so.page';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-nop-ho-so-submitdoc',
  templateUrl: './nop-ho-so-submitdoc.page.html',
  styleUrls: ['./nop-ho-so-submitdoc.page.scss'],
})
export class NopHoSoSubmitdocPage implements OnInit {

  showNopHoSoSubmitDoc: number = 1;

  async openThanhPhanHS() {
    const modal = await this.modalCtrl.create({
      component: ThanhPhanHoSoPage,
      //componentProps: { value: 123 }
    });

    return await modal.present();
  }

  goToPageSuccess() {
    let navigationExtras: NavigationExtras = {
      state: {
        index: this.showNopHoSoSubmitDoc
      }
    }

    this.router.navigate(["/menu/page-success"], navigationExtras);
  }

  constructor(private router: Router, public modalCtrl: ModalController) { }

  ngOnInit() {
  }

}
