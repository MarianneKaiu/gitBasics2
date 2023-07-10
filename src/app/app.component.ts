import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Git basics</h1>
  <ul>
    <li>Git init</li>
    <li>Git commit -m "_"</li>
    <li>git branch "_"</li>
  </ul>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gitBasics2';
}
