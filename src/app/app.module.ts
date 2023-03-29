import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { CRUDserviceService } from './crudservice.service';
import { FormsModule } from '@angular/forms';
// import {AccordionModule} from 'primeng/accordion';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
// import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    // AccordionModule,
    DialogModule,
    ButtonModule
  ],
  providers: [CRUDserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
