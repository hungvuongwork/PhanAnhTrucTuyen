import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';

import { MenuPage } from '../menu/menu.page';

import { NguoiDungService } from '../services/nguoi-dung.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  //Attributes
  private userLoginForm: FormGroup;
  private tenDangNhap: FormControl = new FormControl("", Validators.required);
  private matKhau: FormControl = new FormControl("", Validators.required);
  private userId: number = 0;

  //Others Method
  async onSubmitUserLoginForm() {
    const loading = await this.loadingController.create({
      message: 'Đang xử lý'
    });

    if (this.userLoginForm.valid) {
      await loading.present();
      //console.log("model-based form submitted");
      //console.log(this.userLoginForm);
      let getTenDangNhap = this.userLoginForm.value.tenDangNhap;
      let getMatKhau = this.userLoginForm.value.matKhau;
      this.nguoiDungService.postLogin(getTenDangNhap, getMatKhau).subscribe((res) => {

        this.userId = res[0].ID;
        this.menu.setUserId(this.userId);
        //this.menu.checkLogin();

        loading.dismiss();

        if (this.userId != 0) {
          this.router.navigate(['/menu/home', this.userId]);
        }
        else {
          loading.dismiss();
          this.alertConfirm();
        }
      });
    }
    else {
      console.log("model-based form not submitted");
      loading.dismiss();
    }
  }

  async alertConfirm() {
    const alert = await this.alertController.create({
      header: "Thông báo",
      message: '<ion-text color="medium">Sai tên đăng nhập hoặc mật khẩu. Vui lòng kiểm tra lại!</ion-text>',
      buttons: [{
        text: 'Chấp nhận',
        cssClass: 'alertDanger',
        handler: () => {
          return;
        }
      }]
    });

    await alert.present();
  }

  createForm(): void {
    this.userLoginForm = new FormGroup({
      tenDangNhap: this.tenDangNhap,
      matKhau: this.matKhau
    });
  }

  //Constructors
  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private menu: MenuPage,
    private nguoiDungService: NguoiDungService
  ) { }

  ngOnInit() {
    this.createForm();
  }
}