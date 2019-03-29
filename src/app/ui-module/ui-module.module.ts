import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsLinkComponent } from './components/atoms/atoms-link/atoms-link.component';
@NgModule({
  imports: [
    CommonModule,
    AtomsLinkComponent
  ],exports: [ AtomsLinkComponent ],
  declarations: []
})
export class UiModuleModule { }