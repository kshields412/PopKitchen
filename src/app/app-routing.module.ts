import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { NewThisWeekComponent } from './new-this-week/new-this-week.component';
import { SpotlightComponent } from './spotlight/spotlight.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: 'new', component: NewThisWeekComponent },
  { path: 'spotlight', component: SpotlightComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
