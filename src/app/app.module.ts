import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoAlertDynamicHtmlComponent } from './alerts/alerts.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AlertModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent, DemoAlertDynamicHtmlComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
