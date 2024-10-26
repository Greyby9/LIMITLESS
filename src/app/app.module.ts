import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , routingComponents  } from './app-routing.module';
import { AppComponent } from './app.component'; 



import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent,
    FooterComponent,

  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
