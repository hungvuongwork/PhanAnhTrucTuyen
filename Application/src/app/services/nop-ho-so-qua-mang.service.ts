import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CallApiService } from './call-api.service';


@Injectable({
  providedIn: 'root'
})

export class NopHoSoQuaMangService {

  callNopHoSoQuaMang: string = "nophosoquamang/";


  getDanhSachHoSo(): Observable<any> {
    let resNopHoSoQuaMang = this.http.get(this.callApiService.getApiUrl() + this.callNopHoSoQuaMang + 'ThuTuc_DanhSach_GetList');
    return resNopHoSoQuaMang;
  }

  constructor(
    private http: HttpClient,
    private callApiService: CallApiService
  ) { }
}
