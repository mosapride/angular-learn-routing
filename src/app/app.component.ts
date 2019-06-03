import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-learn-routing';

  constructor(private router: Router) { }

  changeMenu(url: string) {
    this.router.navigateByUrl(url);
  }
}
