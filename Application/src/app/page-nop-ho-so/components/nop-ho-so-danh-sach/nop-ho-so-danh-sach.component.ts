import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoadingController } from '@ionic/angular';
import { NopHoSoQuaMangService } from '../../../services/nop-ho-so-qua-mang.service';

import * as _ from '../../../../../node_modules/lodash';

@Component({
  selector: 'app-nop-ho-so-danh-sach',
  templateUrl: './nop-ho-so-danh-sach.component.html',
  styleUrls: ['./nop-ho-so-danh-sach.component.scss'],
})
export class NopHoSoDanhSachComponent implements OnInit {

  danhSachHoSo: any;

  async getDanhSachHoSo() {
    const loading = await this.loadingController.create({
      message: 'Đang tải dữ liệu'
    });

    await loading.present();

    this.nopHSQMService.getDanhSachHoSo().subscribe(res => {
      this.danhSachHoSo = _(res).groupBy(x => x.TenLinhVuc).map((value, key) => ({ TenLinhVuc: key, DanhSach: value })).value();
      //console.log(this.danhSachHoSo);
      loading.dismiss();
    }), err => {
      console.log(err);
      loading.dismiss();
    }
  }

  goToNopHoSoSubmitDoc(): void {
    this.router.navigateByUrl('/menu/nop-ho-so-submitdoc');
  }

  constructor(private router: Router, public nopHSQMService: NopHoSoQuaMangService, public loadingController: LoadingController) { }

  ngOnInit() {
    this.getDanhSachHoSo();
  }

}
