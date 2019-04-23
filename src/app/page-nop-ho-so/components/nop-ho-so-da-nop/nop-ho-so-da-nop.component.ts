import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nop-ho-so-da-nop',
  templateUrl: './nop-ho-so-da-nop.component.html',
  styleUrls: ['./nop-ho-so-da-nop.component.scss'],
})
export class NopHoSoDaNopComponent implements OnInit {

  danhSachHoSoDaNop: Object[] = [
    {
      title: 'Đăng ký thành lập hộ kinh doanh',
      sentUser: 'Nguyễn Văn A',
      sentDate: '2019-03-18 16:00:00.000',
      statusId: 0,
      statusText: 'Chờ duyệt'
    },
    {
      title: 'Đăng ký thành lập hộ kinh doanh',
      sentUser: 'Nguyễn Văn A',
      sentDate: '2019-03-18 16:00:00.000',
      statusId: 1,
      statusText: 'Đã duyệt'
    },
    {
      title: 'Đăng ký thành lập hộ kinh doanh',
      sentUser: 'Nguyễn Văn A',
      sentDate: '2019-03-18 16:00:00.000',
      statusId: 0,
      statusText: 'Chờ duyệt'
    }
  ]

  constructor() { }

  ngOnInit() { }

}
