import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nop-ho-so-danh-sach',
  templateUrl: './nop-ho-so-danh-sach.component.html',
  styleUrls: ['./nop-ho-so-danh-sach.component.scss'],
})
export class NopHoSoDanhSachComponent implements OnInit {

  danhSachHoSo: Object[] = [
    {
      name: 'LĨNH VỰC KINH TẾ',
      danhSach: [
        { title: 'Đăng ký thành lập hộ kinh doanh' },
        { title: 'Đăng ký thay đổi nội dung đăng ký hộ kinh doanhh' },
      ]
    },
    {
      name: 'NHÀ ĐẤT',
      danhSach: [
        { title: 'ĐĂNG KÝ VÀ CẤP GIẤY CHỨNG NHẬN QUYỀN SỬ DỤNG ĐẤT, QUYỀN SỞ HỮU NHÀ Ở VÀ TÀI SẢN KHÁC GẮN LIỀN VỚI ĐẤT' },
        { title: 'ĐĂNG KÝ BIẾN ĐỘNG KHÔNG CẤP MỚI GIẤY CHỨNG NHẬN (Xác nhận thay đổi trên Giấy chứng nhận)' },
        { title: 'ĐĂNG KÝ BIẾN ĐỘNG CÓ CẤP MỚI GIẤY CHỨNG NHẬN' },
      ]
    }
  ];

  goToNopHoSoSubmitDoc(): void {
    this.router.navigateByUrl('/menu/nop-ho-so-submitdoc');
  }

  constructor(private router: Router) { }

  ngOnInit() { }

}
