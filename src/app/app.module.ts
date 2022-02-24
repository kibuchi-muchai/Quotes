import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WquotesComponent } from './wquotes/wquotes.component';
import { WquotesDetailComponent } from './wquotes-detail/wquotes-detail.component';
import { WquotesFormComponent } from './wquotes-form/wquotes-form.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { UpwardComponent } from './upward/upward.component';


@NgModule({
  declarations: [
    AppComponent,
    WquotesComponent,
    WquotesDetailComponent,
    WquotesFormComponent,
    StrikethroughDirective,
    DateCountPipe,
    UpwardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
