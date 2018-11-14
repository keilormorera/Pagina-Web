import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderOneComponent } from "../header-one/header-one.component";
import { MasterPageComponent } from "../master-page/master-page.component";
import { RegistrarseComponent} from '../registrarse/registrarse.component'
import { HomeComponent } from '../home/home.component'


@NgModule({
  imports: [
    CommonModule,MasterPageComponent,HeaderOneComponent, RegistrarseComponent, HomeComponent
  ],
  declarations: []
})
export class MasterPageModule { }
