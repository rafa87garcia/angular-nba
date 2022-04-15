import { Component, Input, OnInit } from '@angular/core';
import { MenuLink } from 'src/app/shared/models/menuLink.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent implements OnInit {

  public src_logo: string = "https://1000marcas.net/wp-content/uploads/2019/12/NBA-Logo.png";

  @Input() public menu: MenuLink[] = [];
  @Input() public menuUser: MenuLink[] = [];

  ngOnInit(): void {
    console.log(this.menuUser);

  }

}
