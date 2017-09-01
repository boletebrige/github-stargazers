import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['../node_modules/bootstrap/dist/css/bootstrap.min.css'],
  template: `
    <div class="jumbotron text-center">
      <h1>The App Lives!</h1>
      <p>{{ message }}</p>
    </div>
    <home-page></home-page>
  `
})
export class AppComponent {
  message = 'This is the sample message.';
}