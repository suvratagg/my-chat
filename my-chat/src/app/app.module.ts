import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import {MatTabsModule} from '@angular/material';
import {MatTabGroup} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import { ModalModule } from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import {MatInputModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
   
    HttpModule,

 
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,

   

    AngularFontAwesomeModule,

    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,

    ModalModule.forRoot()
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}