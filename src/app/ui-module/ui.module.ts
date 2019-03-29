import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsLinkComponent } from './components/atoms/atoms-link/atoms-link.component';
import { AtomsInputComponent } from './components/atoms/atoms-input/atoms-input.component';
import { AtomsButtonComponent } from './components/atoms/atoms-button/atoms-button.component';
import { MoleculesNavSearch } from './components/molecules/molecules-search/molecules-nav-search.component';


@NgModule({
  imports: [ CommonModule ],
  exports: [ AtomsLinkComponent, AtomsInputComponent, AtomsButtonComponent, MoleculesNavSearch],
  declarations: [AtomsLinkComponent, AtomsInputComponent, AtomsButtonComponent, MoleculesNavSearch]
})
export class UiModule { }