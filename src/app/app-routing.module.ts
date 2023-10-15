import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { MeetingComponent } from './meeting.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'create-client', component: ClientComponent },
  { path: 'schedule-meeting', component: MeetingComponent },
  { path: '', redirectTo: '/create-client', pathMatch: 'full' }, // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

