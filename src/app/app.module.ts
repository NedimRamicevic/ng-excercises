import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {GaugeModule} from 'angular-gauge';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TitleComponent } from './components/title/title.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    TitleComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GaugeModule.forRoot(),
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,

  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
