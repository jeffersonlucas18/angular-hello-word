import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MeuPrimeiroPassoComponent} from './primeiro-passo/meu-primeiro-passo.component';
import { Meuprimeiro2Component } from './meuprimeiro2/meuprimeiro2.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroPassoComponent,
    Meuprimeiro2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
