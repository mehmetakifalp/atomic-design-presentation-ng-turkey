import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { AtomsInputComponent } from '../atoms-input/atoms-input.component';

@Component({
  selector: 'atoms-input-with-text',
  templateUrl:'atoms-input-with-text.component.html',
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AtomsInputWithTextComponent extends AtomsInputComponent{


}
