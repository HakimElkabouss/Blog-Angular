import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-blog';

  posts = [
    {
      title: 'Mon Premier Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      loveIts: 0,
      created_at: 'Wed Oct 30 2018 16:33:22'
    },
    {
      title: 'Mon Deuxième Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      loveIts: 0,
      created_at: 'Wed Oct 27 2018 16:33:22'
    },
    {
      title: 'Mon Troisième Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      loveIts: 0,
      created_at: 'Wed Oct 12 2018 16:33:22'
    },
    {
      title: 'Mon Quatrième Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      loveIts: 0,
      created_at: 'Wed Oct 01 2018 16:33:22'
    }
  ];
}
