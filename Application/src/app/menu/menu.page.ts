import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

import { NguoiDungService } from '../services/nguoi-dung.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  //Attributes
  private userId: number = 0;
  private nguoiDungById = [];
  private selectedPath: string = '';
  private menuLinks = [
    { title: 'Thông tin ứng dụng', icon: 'tv', url: '/menu/' },
    { title: 'Góp ý - Báo lỗi', icon: 'thumbs-up', url: '/menu/' },
    { title: 'Trợ giúp', icon: 'help-circle', url: '/menu/' },
  ]

  //Gets, Sets Method
  setUserId(userId: number): void {
    this.userId = userId;
  }

  setNguoiDungById(nguoiDungById) {
    this.nguoiDungById = nguoiDungById;
  }

  setSelectedPath(): void {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  //Others Method
  logout(): void {
    this.userId = 0;
    this.menu.close();
    this.goToHomePage(0);
  }

  goToHomePage(userId: number): void {
    this.router.navigate(["/menu/home/", userId]);
  } 

  getNguoiDungById(userId: number) {
    this.nguoiDungService.getNguoiDungById(userId).subscribe((res) => {
      this.setNguoiDungById(res);
    });
  }

  //Constructors
  constructor(
    private router: Router,
    private menu: MenuController,
    private nguoiDungService: NguoiDungService
  ) { }

  ngOnInit() {
    this.setSelectedPath();
  }
}
