import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jlsp';
  images = [
    { path: 'assets/images/feedback-1.jpeg' },
    { path: 'assets/images/feedback-2.jpeg' },
    { path: 'assets/images/feedback-3.jpeg' },
    { path: 'assets/images/feedback-3.1.jpeg' },
    { path: 'assets/images/feedback-4.jpeg' },
    { path: 'assets/images/feedback-5.jpeg' },
    { path: 'assets/images/feedback-6.jpeg' },
    { path: 'assets/images/feedback-7.jpeg' }
  ];
}
