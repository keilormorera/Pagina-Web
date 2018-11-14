import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderOneComponent } from './master_page/header-one/header-one.component';
import { MasterPageComponent } from './master_page/master-page/master-page.component';
import { FooterComponent } from './master_page/footer/footer.component';
import { HomeComponent } from './master_page/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderOneComponent,
    MasterPageComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
