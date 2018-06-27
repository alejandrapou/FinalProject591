import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Final Project CS591';

  upperCase (text: string) :string {
    return text.toUpperCase()
  }

}
