import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menuLinks = [
    { title: 'Trang chủ', icon: 'home', url: '/menu/home' },
    { title: 'Đăng ký / Đăng nhập', icon: 'people', url: '/menu/login' },
    { title: 'Thông tin ứng dụng', icon: 'tv', url: '/menu/home' },
    { title: 'Góp ý - Báo lỗi', icon: 'thumbs-up', url: '/menu/home' },
    { title: 'Trợ giúp', icon: 'help-circle', url: '/menu/home' },
  ]

  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

}
