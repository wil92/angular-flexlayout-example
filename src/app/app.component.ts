import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-flexlayout';

  getRandomColor(): string {
    return ['#a83a3a', '#a95a42', '#69963b', '#316094'][Math.floor(Math.random() * 4)];
  }
}
