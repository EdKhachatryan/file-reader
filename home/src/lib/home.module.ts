import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { homeRoutes } from './lib.routes';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
