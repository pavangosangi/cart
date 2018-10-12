import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatBadgeModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/Http';

import { AppComponent } from './app.component';
import { BootstrapNavbarComponent } from './bootstrap-navbar/bootstrap-navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './services/search.service';
import { SingleitemComponent } from './singleitem/singleitem.component';
import { MultipleitemsComponent } from './multipleitems/multipleitems.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapNavbarComponent,
    HomeComponent,
    SearchComponent,
    SingleitemComponent,
    MultipleitemsComponent,
    AddproductComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, data: {title: 'home', depth: 1}},
      { path: 'search', component: SearchComponent, data: {title: 'search', depth: 1}},
      { path: 'singleitem', component: SingleitemComponent, data: {title: 'singleItem', depth: 2}},
      { path: 'multipleitem', component: MultipleitemsComponent, data: {title: 'multipleItem', depth: 2}},
      { path: 'addproduct', component: AddproductComponent, data: {title: 'addproduct', depth: 2}}
    ])
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
