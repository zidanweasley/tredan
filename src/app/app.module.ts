import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './components/common/footer/footer.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';


import { FaqComponent } from './components/common/faq/faq.component';
import { PricingComponent } from './components/common/pricing/pricing.component';


import { FeaturesComponent } from './components/common/features/features.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeOneComponent,
    FaqComponent,
    PricingComponent,
    FeaturesComponent,

 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
