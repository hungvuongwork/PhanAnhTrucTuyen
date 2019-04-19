import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.scss'],
})

export class TinTucComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  goToTinTucCategory() {
    this.navCtrl.navigateForward('/menu/tin-tuc-category');
  }

  goToTinTucDetail() {
    this.navCtrl.navigateForward('/menu/tin-tuc-detail');
  }

  ngOnInit() { }

}
