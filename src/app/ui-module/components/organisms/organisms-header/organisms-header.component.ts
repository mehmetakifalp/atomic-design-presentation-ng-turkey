import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'organisms-header',
  templateUrl:'organisms-header.component.html',
  styleUrls:['organisms-header.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
})
export class OrganismsHeaderComponent {
  
}
