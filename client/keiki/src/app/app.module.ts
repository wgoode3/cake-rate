import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeikiNewComponent } from './keiki-new/keiki-new.component';
import { KeikiAllComponent } from './keiki-all/keiki-all.component';
import { KeikiSingleComponent } from './keiki-single/keiki-single.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    KeikiNewComponent,
    KeikiAllComponent,
    KeikiSingleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
