import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { NguoiDungService } from '../services/nguoi-dung.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.page.html',
  styleUrls: ['./registry.page.scss'],
})
export class RegistryPage implements OnInit {

  //Atrributes
  private showRegistrySuccess: number = 2;
  private userRegisterForm: FormGroup;
  private tenHienThi: FormControl = new FormControl("", Validators.required);
  private tenDangNhap: FormControl = new FormControl("", Validators.required);
  private matKhau: FormControl = new FormControl("", Validators.required);
  private soCMND: FormControl = new FormControl("", Validators.required);
  private soDT: FormControl = new FormControl("", Validators.required);

  //Other Methods
  goToPageSuccess(userId: number): void {
    let navigationExtras: NavigationExtras = {
      state: {
        index: this.showRegistrySuccess,
        userId: userId
      }
    }

    this.router.navigate(['/menu/page-success'], navigationExtras);
  }

  createForm(): void {
    this.userRegisterForm = new FormGroup({
      tenHienThi: this.tenHienThi,
      tenDangNhap: this.tenDangNhap,
      matKhau: this.matKhau,
      soCMND: this.soCMND,
      soDT: this.soDT
    });
  }

  async confirmRegister(tenHienThi: string, tenDangNhap: string, matKhau: string, soCMND: number, soDT: string) {
    let loading = await this.loadingController.create({
      message: 'Đang xử lý'
    });

    let alertError = await this.alertController.create({
      header: 'Thông báo',
      message: 'Đã có lỗi xảy ra! Vui lòng thử lại sau.',
      buttons: ['Chấp nhận']
    })

    let alert = await this.alertController.create({
      header: 'Thông báo',
      message: 'Bạn có chắc chắn đăng ký?',
      buttons: [
        {
          text: 'Hủy bỏ',
          role: 'cancel',
          handler: () => {
            return;
          }
        }, {
          text: 'Chấp nhận',
          cssClass: 'alertDanger',
          handler: () => {
            loading.present();

            this.nguoiDungService.postRegister(tenHienThi, tenDangNhap, matKhau, soCMND, soDT).subscribe((res) => {
              if (res[0].IsInserted) {
                this.nguoiDungService.postLogin(tenDangNhap, matKhau).subscribe((res) => {
                  this.goToPageSuccess(res[0].ID);
                });

                loading.dismiss();
              }
              else {
                alertError.present();
                loading.dismiss();
              }
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async onSubmitUserRegisterForm() {
    if (this.userRegisterForm.valid) {
      let getTenHienThi = this.userRegisterForm.value.tenHienThi;
      let getTenDangNhap = this.userRegisterForm.value.tenDangNhap;
      let getMatKhau = this.userRegisterForm.value.matKhau;
      let getSoCMND = this.userRegisterForm.value.soCMND;
      let getSoDT = this.userRegisterForm.value.soDT;

      this.confirmRegister(getTenHienThi, getTenDangNhap, getMatKhau, getSoCMND, getSoDT);
    };
  }

  //Constructors
  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private nguoiDungService: NguoiDungService
  ) { }

  ngOnInit() {
    this.createForm();
  }

}
