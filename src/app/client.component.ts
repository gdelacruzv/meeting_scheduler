import { Component } from '@angular/core';
import { DataService } from './service/data.service'; 

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  // Adding properties to the ClientComponent
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientDescription: string;

  constructor(private dataService: DataService) { 
    this.clientName = '';
    this.clientEmail = '';
    this.clientPhone = '';
    this.clientDescription = '';
  }

  onSubmit(formData: any): void {
    // Map the form data to the structure expected by the server
    const dataToSubmit = {
        clientName: formData.clientName || this.clientName,     // Consider instance properties
        clientEmail: formData.clientEmail || this.clientEmail,  // Consider instance properties
        clientPhone: formData.clientPhone || this.clientPhone,   // Consider instance properties
        clientDescription: formData.ClientDescription || this.clientPhone
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

