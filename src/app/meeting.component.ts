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
  selectedClient: number | null = null;  // Initialized with a default value
  meetingDate: string = '';               // Initialized with a default value
  meetingTime: string = '';               // Initialized with a default value
  meetingLocation: string = '';           // Initialized with a default value
  meetingNotes: string = '';              // Initialized with a default value

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
        meetingDate: formData.meetingDate || this.meetingDate,
        meetingTime: formData.meetingTime || this.meetingTime,
        meetingLocation: formData.meetingLocation || this.meetingLocation,
        meetingNotes: formData.meetingNotes || this.meetingNotes
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
