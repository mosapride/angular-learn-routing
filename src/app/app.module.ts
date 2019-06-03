import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Menu1Component } from './page/menu1/menu1.component';
import { Menu2Component } from './page/menu2/menu2.component';
import { Menu3Component } from './page/menu3/menu3.component';

@NgModule({
  declarations: [
    AppComponent,
    Menu1Component,
    Menu2Component,
    Menu3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
