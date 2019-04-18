import { Component, OnInit, Input } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() title : string;
  @Input() isMenu : boolean = true;

  

  constructor(private menuCtrl: MenuController, private navCtrl: NavController) { }



  openMenu() {
    this.menuCtrl.open();
  }

  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() { }

}
