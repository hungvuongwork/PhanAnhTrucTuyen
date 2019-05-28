import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CallApiService } from './call-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NguoiDungService {

  callNguoiDung: string = "nguoidung/";

  postLogin(tenDangNhap: string, matKhau: string): Observable<any> {
    let resLogin = this.http.post(this.callApiService.getApiUrl() + this.callNguoiDung + 'DangNhap', { TenDangNhap: tenDangNhap, MatKhau: matKhau }, this.callApiService.getHttpOptions());
    return resLogin;
  }

  postRegister(tenHienThi: string, tenDangNhap: string, matKhau: string, soCMND: number, soDT: string): Observable<any> {
    let resRegister = this.http.post(this.callApiService.getApiUrl() + this.callNguoiDung + "DangKy", {
      TenHienThi: tenHienThi,
      TenDangNhap: tenDangNhap,
      MatKhau: matKhau,
      SoCMND: soCMND,
      SoDT: soDT,
      ID_LoaiTaiKhoan: 3, //Mặc định tài khoản là công dân, sau này có phân quyền sau.
      ID_ThuTuc_LinhVuc: 0 //Mặc định tài khoản là công dân không có lĩnh vực.
    }, this.callApiService.getHttpOptions());

    return resRegister;
  }

  getNguoiDungById(userId: number): Observable<any> {
    let resNguoiDungById = this.http.get(this.callApiService.getApiUrl() + this.callNguoiDung + 'GetListById/' + userId);
    return resNguoiDungById;
  }

  constructor(
    private http: HttpClient,
    private callApiService: CallApiService
  ) { }
}
