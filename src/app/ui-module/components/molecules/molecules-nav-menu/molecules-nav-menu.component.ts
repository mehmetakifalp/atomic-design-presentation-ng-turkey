import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
export interface MenuItem{
  url:string;
  icon:string;
  text:string;
}
@Component({
  selector: 'molecules-nav-menu',
  templateUrl:'molecules-nav-menu.component.html',
  styleUrls:['molecules-nav-menu.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
})
export class MoleculesNavMenuComponent {
    @Input()
    menuItems: MenuItem[] = [
      { url: '/login', icon:'glyphicon-envelope', text:'Profile'},
      { url: '/login', icon:'glyphicon-plane', text:'Dashboard'},
      { url: '/login', icon:'glyphicon-heart', text:'About'},
      { url: '/login', icon:'glyphicon-star', text:'Favourites'},
  ]
}
