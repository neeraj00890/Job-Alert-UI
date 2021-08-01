import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeRoutingModule } from './home.routing';
import { MaterialModule } from '../material/material.module';
import { HomeService } from './home.service';



@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  providers: [HomeService]
})
export class HomeModule { }
