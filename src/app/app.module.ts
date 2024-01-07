import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
import { TriplePipe } from './shared/pipes/triple.pipe';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CapitalizePipe,
    TriplePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
