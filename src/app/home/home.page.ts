import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  isSearchBar: boolean = false;
  isMoreMenu: boolean = false;

  loadList(e): void {
    this.isSearchBar = false;
    this.isMoreMenu = false;
  }

  duyetTatCa(): void {
    this.alertConfirm('Chắc chắn duyệt tất cả?', 'Bạn có chắc chắn duyệt tất cả hồ sơ?', 1)
  }

  khongDuyetTatCa(): void {
    this.alertConfirm('Chắc chắn không duyệt tất cả?', 'Bạn có chắc chắn không duyệt tất cả hồ sơ?', 0)
  }

  async alertConfirm(headerText: string, subHeaderText: string, isConfirmWith: number) {
    const alert = await this.alertController.create({
      header: headerText,
      message: '<ion-text color="medium">' + subHeaderText + '</ion-text>',
      buttons: [
        {
          text: 'Hủy bỏ',
          role: 'cancel',
          cssClass: 'alertMedium',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Chấp nhận',
          cssClass: 'alertDanger',
          handler: () => {
            if(isConfirmWith == 0) {
              console.log('Confirm Okay for Khong duyet');
            }
            else {
              console.log('Confirm Okay for duyet');
            }
          }
        }
      ]
    });

    await alert.present();
  }

  constructor(public alertController: AlertController) { }
}