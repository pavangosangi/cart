import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BootstrapNavbarComponent } from './bootstrap-navbar/bootstrap-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
