import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { AtomsLinkComponent } from "../atoms-link/atoms-link.component";

@Component({
  selector: "atoms-link-with-icon",
  templateUrl: "atoms-link-with-icon.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AtomsLinkWithIconComponent extends AtomsLinkComponent {
  @Input() iconClass: string = "glyphicon ";

  @Input() iconName: string = "glyphicon-envelope";
}
