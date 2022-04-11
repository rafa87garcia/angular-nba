import { Component } from '@angular/core';
import { MenuLinkInterface } from './shared/models/menuLink.model';
import { SocialMediaLink } from './shared/models/socialMediaLink.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nba';

  public menuLinks: MenuLinkInterface[] = [];
  public menuSocialMediaLinks: SocialMediaLink[] = [];

  constructor() {
    this.menuLinks = [
      { name: "inicio", link: "/" },
      { name: "Jugadores", link: "/players/list" },
    ]

    this.menuSocialMediaLinks = [
      { icon: "fa-facebook", link: "https://www.facebook.com/nba" },
      { icon: "fa-twitter", link: "http://twitter.com" },
      { icon: "fa-instagram", link: "http://instagram.com" }
    ]
  }
}
