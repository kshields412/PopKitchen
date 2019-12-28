import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { LoginComponent } from './login/login.component';
import { SpotlightComponent } from './spotlight/spotlight.component';
import { NewThisWeekComponent } from './new-this-week/new-this-week.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    LoginComponent,
    SpotlightComponent,
    NewThisWeekComponent,
    SearchComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
