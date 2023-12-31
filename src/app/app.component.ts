import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Git basics</h1>
  <ul>
    <li>git init</li>
    <li>git commit -m "_"</li>
    <li>git branch "_"</li>
    <li>git checkout _</li>
    <li>git push -u origin _</li>
  </ul>
  <ul>
    <li>git clone</li>
  </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gitBasics2';
}
