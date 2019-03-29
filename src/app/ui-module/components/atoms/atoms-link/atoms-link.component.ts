import { Component,  Input } from '@angular/core';

@Component({
  selector: 'atoms-link',
  templateUrl: './atoms-link.component.html',
  styleUrls: ['./atoms-link.component.css']
})
export class AtomsLinkComponent {

@Input() linkText: string = 'NGTurkey';

@Input() linkUrl: string = 'https://github.com/ng-turkey';

@Input() linkClasses: string = 'link-classes';

}