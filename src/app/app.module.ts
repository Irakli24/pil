import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {ServerService} from './server.service';
import {CalendarModule} from './calendar/calendar.module';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {Routes, RouterModule} from '@angular/router';
import {CalendarComponent} from './calendar/calendar.component';
import { HttpClientModule } from '@angular/common/http';
import {CalendarService} from './calendar/calendar.service';

const appRoutes: Routes = [
  { path: '', component: LoginFormComponent},
  { path: 'login-form', component: LoginFormComponent},
  { path: 'login-form/registration-form', component: RegistrationFormComponent},
  { path: 'registration-form', component: RegistrationFormComponent},
  { path: 'calendar', component: CalendarComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    CalendarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServerService, CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
