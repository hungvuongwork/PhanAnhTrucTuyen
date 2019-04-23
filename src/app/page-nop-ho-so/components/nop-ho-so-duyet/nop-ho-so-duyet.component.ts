import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nop-ho-so-duyet',
  templateUrl: './nop-ho-so-duyet.component.html',
  styleUrls: ['./nop-ho-so-duyet.component.scss'],
})
export class NopHoSoDuyetComponent implements OnInit {

  danhSachHoSoDuyet: Object[] = [
    {
      title: 'Đăng ký thành lập hộ kinh doanh',
      sentUser: 'Nguyễn Văn A',
      sentDate: '2019-03-18 16:00:00.000'
    },
    {
      title: 'Đăng ký thành lập hộ kinh doanh',
      sentUser: 'Nguyễn Văn A',
      sentDate: '2019-03-18 16:00:00.000'
    },
    {
      title: 'Đăng ký thành lập hộ kinh doanh',
      sentUser: 'Nguyễn Văn A',
      sentDate: '2019-03-18 16:00:00.000'
    }
  ]

  constructor() { }

  ngOnInit() { }

}
