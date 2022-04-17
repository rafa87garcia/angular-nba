import { Component } from '@angular/core';
import { MenuLink } from './core/models/menuLink.model';
import { SocialMediaLink } from './core/models/socialMediaLink.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nba';

  public menuLinks: MenuLink[] = [];
  public menuSocialMediaLinks: SocialMediaLink[] = [];
  public menuUser: MenuLink[] = [];

  constructor() {
    this.menuLinks = [
      { name: "players", link: "/players/list" },
      { name: "teams", link: "/teams/list" },
    ]
    this.menuUser = [
      { name: "Create player", link: "/players/create" },
    ];

    this.menuSocialMediaLinks = [
      { icon: "fa-facebook", link: "https://www.facebook.com/nba" },
      { icon: "fa-twitter", link: "http://twitter.com" },
      { icon: "fa-instagram", link: "http://instagram.com" }
    ]

  }
}
