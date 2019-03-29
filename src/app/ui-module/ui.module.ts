import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsLinkComponent } from './components/atoms/atoms-link/atoms-link.component';
import { AtomsInputComponent } from './components/atoms/atoms-input/atoms-input.component';
import { AtomsButtonComponent } from './components/atoms/atoms-button/atoms-button.component';
import { MoleculesNavSearch } from './components/molecules/molecules-search/molecules-nav-search.component';
import { MoleculesNavMenuComponent } from './components/molecules/molecules-nav-menu/molecules-nav-menu.component';
import { AtomsIconComponent } from './components/atoms/atoms-icon/atoms-icon.component';


@NgModule({
  imports: [ CommonModule ],
  exports: [ AtomsLinkComponent, AtomsInputComponent, AtomsButtonComponent,AtomsIconComponent, MoleculesNavSearch, MoleculesNavMenuComponent],
  declarations: [AtomsLinkComponent, AtomsInputComponent, AtomsButtonComponent,AtomsIconComponent, MoleculesNavSearch, MoleculesNavMenuComponent]
})
export class UiModule { }