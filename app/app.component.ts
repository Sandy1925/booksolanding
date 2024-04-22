import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landing';

  goToReg(){
    window.location.href="http://localhost:4201"
  }

  goToLog(){
    window.location.href="http://localhost:4202"
  }
}
