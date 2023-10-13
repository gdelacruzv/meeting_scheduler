import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  clients: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllClients()
      .subscribe(
        (data: any[]) => {
          this.clients = data;
        },
        error => {
          alert('Error fetching clients. Please try again.');
        }
      );
  }

  onMeetingSubmit(formData: any): void {
    // Map the form data to the structure expected by the server
    const dataToSubmit = {
        clientId: formData.clientName, // Assuming the select input's value is the client's ID
        meetingDate: formData.meetingDate,
        meetingTime: formData.meetingTime
        // You might want to add meetingLocation and meetingNotes if they are to be saved on the server side
    };

    this.dataService.scheduleMeeting(dataToSubmit)
      .subscribe(
        response => {
          alert('Meeting scheduled successfully!');
          // Here, you can reset your form or redirect as necessary
        },
        error => {
          alert('Error scheduling meeting. Please try again.');
        }
      );
  }
}
