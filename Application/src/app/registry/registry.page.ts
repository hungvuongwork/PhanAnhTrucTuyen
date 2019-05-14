import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.page.html',
  styleUrls: ['./registry.page.scss'],
})
export class RegistryPage implements OnInit {

  showRegistrySuccess: number = 2;

  goToPageSuccess(): void {
    let navigationExtras: NavigationExtras = {
      state: {
        index: this.showRegistrySuccess
      }
    }

    this.router.navigate(['/menu/page-success'], navigationExtras);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
