import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { FormsModule } from '@angular/forms';
import { ClientComponent } from './client.component';
import { MeetingComponent } from './meeting.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, ClientComponent, MeetingComponent
  ],
  imports: [FormsModule,
    BrowserModule,
    AppRoutingModule,
    ScheduleModule, RecurrenceEditorModule, HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
