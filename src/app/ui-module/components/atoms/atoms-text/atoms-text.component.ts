import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atoms-text',
  templateUrl:'atoms-text.component.html',
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AtomsTextComponent {


  @Input() textClass: string = '';

  @Input() textLabel: string = '';
}
