import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderLayoutComponent } from './layouts/header/header.component';
import { FooterLayoutComponent } from './layouts/footer/footer.component';
import { AddressFinderComponent } from './components/address-finder/adress-finder.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddressFinderComponent,
    HeaderLayoutComponent,
    FooterLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
