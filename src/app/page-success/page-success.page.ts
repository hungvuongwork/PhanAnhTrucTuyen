import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-success',
  templateUrl: './page-success.page.html',
  styleUrls: ['./page-success.page.scss'],
})
export class PageSuccessPage implements OnInit {

  showSuccess: number = 0;
  getQueryParamsByState: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.getQueryParamsByState = this.router.getCurrentNavigation().extras.state;

    this.route.queryParams.subscribe(params => {
      if (this.getQueryParamsByState) {
        this.showSuccess = this.getQueryParamsByState.index;
      }
    });
  }

  ngOnInit() {
  }

}
