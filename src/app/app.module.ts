import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuoteService } from '../services/quote.service';
import { QuoteBoxComponent } from 'src/quote-box/quote-box.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    QuoteDetailsComponent
  ],
  imports: [
    BrowserModule
    HttpClientModule
  ],
  providers: [ QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
