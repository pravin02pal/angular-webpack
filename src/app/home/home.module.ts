import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
export const routerConfig = [{
  path: '',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routerConfig), CommonModule],
  declarations: [
      HomeComponent
    ],
  exports: [
      HomeComponent
    ]
})

export default class HomeModule {}