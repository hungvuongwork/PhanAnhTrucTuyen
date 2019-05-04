import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-thanh-phan-ho-so',
  templateUrl: './thanh-phan-ho-so.page.html',
  styleUrls: ['./thanh-phan-ho-so.page.scss'],
})
export class ThanhPhanHoSoPage implements OnInit {

  async closeThanhPhanHS() {
    await this.modalCtrl.dismiss();
  }

  dsThanhPhanHS = [
    { title: 'Giấy đề nghị đăng ký kinh doanh hộ kinh doanh.' },
    { title: 'Bản photo Giấy chứng minh nhân dân.' },
    { title: 'Bản sao hợp lệ Chứng chỉ hành nghề.' },
    { title: 'Bản sao hợp lệ văn bản xác nhận vốn pháp định của cơ quan tổ chức có thẩm quyền.' },
  ]

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

}
