import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state = 0;

  increase() {
    console.log('increased to: ', this.state );
  }

  decrease() {
    console.log('decreased to: ', this.state);
  }
}
