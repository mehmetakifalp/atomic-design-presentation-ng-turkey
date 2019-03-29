import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-atoms-link',
  templateUrl: './atoms-link.component.html',
  styleUrls: ['./atoms-link.component.css']
})
export class AtomsLinkComponent {

@Input() linkText: string = 'NGTurkey';

@Input() linkUrl: string = 'http://google.com';

@Input() linkClasses: string = 'nav-title';

}