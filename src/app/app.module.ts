import {AlarmClockService} from "./alarm-clock/alarm-clock.service";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { WebRadiosComponent } from './web-radios/web-radios.component';
import { HomepageComponent } from './homepage/homepage.component';

import { WebRadioService } from './web-radios/web-radio.service';
import { AlarmClockComponent } from './alarm-clock/alarm-clock.component';
import { WebRadioFormComponent } from './web-radios/web-radio-form/web-radio-form.component';
import { AlarmClockFormComponent } from './alarm-clock/alarm-clock-form/alarm-clock-form.component';
import { DayOfWeekComponent } from './day-of-week/day-of-week.component';

@NgModule({
  declarations: [
    AppComponent,
    WebRadiosComponent,
    HomepageComponent,
    AlarmClockComponent,
    WebRadioFormComponent,
    AlarmClockFormComponent,
    DayOfWeekComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'homepage',
        component: HomepageComponent
      },
      {
        path: 'webradios',
        component: WebRadiosComponent
      },
      {
        path: 'webradios/new',
        component: WebRadioFormComponent
      },
      { path: 'webradios/:id',
       component: WebRadioFormComponent},
      {
        path: 'alarms',
        component: AlarmClockComponent
      },
      {
        path: 'alarms/new',
        component: AlarmClockFormComponent
      },
      {
        path: 'alarms/:id',
        component: AlarmClockFormComponent
      },
    ])
  ],
  providers: [WebRadioService, AlarmClockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
