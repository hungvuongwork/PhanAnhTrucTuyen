import { Component, OnInit } from '@angular/core';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-tin-tuc-detail',
  templateUrl: './tin-tuc-detail.page.html',
  styleUrls: ['./tin-tuc-detail.page.scss'],
})
export class TinTucDetailPage implements OnInit {

  showToolbar = false;

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 250;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
