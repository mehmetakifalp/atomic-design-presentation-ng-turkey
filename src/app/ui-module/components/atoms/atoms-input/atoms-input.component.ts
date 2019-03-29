import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'atoms-input',
  templateUrl:'atoms-input.component.html',
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AtomsInputComponent {

  @Input()
  inputType:string = "Default Text";

  @Input()
  inputPlaceholder: string = 'Default Placeholder';

  @Input()
  inputClass: string = 'default-class';

  @Input()
  inputName: string = 'inputName';

  @Input() inputReadonly: boolean = false;

  @Input() inputDisabled: boolean = false;

  @Input() inputId : string = '';

}
