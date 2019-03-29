import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atoms-icon',
  templateUrl:'atoms-icon.component.html',
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AtomsIconComponent{

  @Input() iconClass: string = 'glyphicon';

  @Input() iconName: string = 'glyphicon-envelope';
}
