import { Component } from '@angular/core';
import { DataService } from './service/data.service'; 

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  constructor(private dataService: DataService) { }

  onSubmit(formData: any): void {
    // Map the form data to the structure expected by the server
    const dataToSubmit = {
        clientName: formData.clientName,
        clientEmail: formData.clientEmail,
        clientPhone: formData.clientPhone
    };

    // Call the dataService to send the data
    this.dataService.addClient(dataToSubmit)
      .subscribe(
        response => {
          alert('Client added successfully!');
          // Here, you can reset your form or redirect as necessary
        },
        error => {
          alert('Error adding client. Please try again.');
        }
      );
  }
}
