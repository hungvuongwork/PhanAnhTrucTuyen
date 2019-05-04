import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { HomePage } from '../../../home/home.page';


@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.scss'],
})

export class TinTucComponent implements OnInit {
  danhSachTinTuc: Object[] = [
    {
      name: null,
      isHotNews: true,
      danhSach: [
        {
          titleNews: 'PHÒNG GIAO DỊCH NGÂN HÀNG CHÍNH SÁCH XÃ HỘI HUYỆN - Hội nghị Triển khai nhiệm vụ năm 2019',
          subtitleNews: 'Thực hiện Quyết định số 772/QÐ-TTg ngày 26/6/2018 của Thủ tướng Chính phủ về tổ chức Tổng điều tra dân số và nhà ở năm 2019, bắt đầu từ hôm nay, 01/4/2019, 12 xã - thị trấn trên địa bàn huyện',
          imageNews: 'http://www.hocmon.hochiminhcity.gov.vn/Hnh%20nh%20bn%20tin/2019-4/IMG_1389.jpg',
          publishDateNews: '2019-03-18 16:55:26.453'
        }
      ]
    },
    {
      name: 'KINH TẾ XÃ HỘI',
      isHotNews: false,
      danhSach: [
        {
          titleNews: 'Khảo sát tiến độ thực hiện 3 dự án đầu tư công',
          subtitleNews: 'Sáng 19/3, đồng chí Triệu Đỗ Hồng Phước - Trưởng ban Kinh tế - ngân sách HĐND Thành phố làm Trưởng đoàn có buổi khảo sát thực tế liên quan 3 dự án mở rộng, nâng cấp đường Trần Văn Mười, dự án bồi thường giải phóng mặt bằng (GPMB) nâng cấp',
          imageNews: 'http://www.hocmon.hochiminhcity.gov.vn/Hnh%20nh%20bn%20tin/2019-4/%C4%91.c%20Tri%E1%BB%87u%20%C4%90%E1%BB%97%20H%E1%BB%93ng%20Ph%C6%B0%E1%BB%9Bc%20ph%C3%A1t%20bi%E1%BB%83u.JPG',
          publishDateNews: '2019-04-01 16:55:26.453'
        },
        {
          titleNews: 'Kiểm tra cơ sở sản xuất, đóng gói sản phẩm dầu nhớt giả',
          subtitleNews: 'Thực hiện Kế hoạch của Cục Quản lý thị trường Thành phố về kiểm tra, kiểm soát thị trường, chống các hành vi vi phạm trong sản xuất, kinh doanh hàng giả, xâm phạm quyền sở hữu trí tuệ và hoạt động thương mại điện tử; Kế hoạch của UBND huyện',
          imageNews: './assets/Img-Not-Found.jpg',
          publishDateNews: '2019-04-15 16:55:26.453'
        },
        {
          titleNews: 'UBND XÃ TÂN HIỆP - HTX SX TMDV RAU SẠCH NÊN ĂN',
          subtitleNews: 'Tối 12/01, tại địa chỉ 13/1, ấp Thới Tây 2, UBND xã phối hợp HTX Sản xuất TM-DV Rau Sạch Nên Ăn tổ chức công bố thành lập mới và khánh thành Điểm sản xuất Thứ 6. Tham dự có đồng chí Nguyễn Hữu Hùng - Ủy viên Ban Thường vụ Huyện ủy',
          imageNews: 'http://www.hocmon.hochiminhcity.gov.vn/Hnh%20nh%20bn%20tin/2019-1/rs.jpg',
          publishDateNews: '2019-01-21 16:55:26.453'
        },
      ]
    }
  ]

  constructor(private navCtrl: NavController, public homeCtrl: HomePage) {
    this.homeCtrl.isMoreMenu = false;
    this.homeCtrl.isSearchBar = false;
  }

  goToTinTucCategory() {
    this.navCtrl.navigateForward('/menu/tin-tuc-category');
  }

  goToTinTucDetail() {
    this.navCtrl.navigateForward('/menu/tin-tuc-detail');
  }

  ngOnInit() { }
}
