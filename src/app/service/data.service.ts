export interface Client {
    client_id: number;  // updated from id to client_id
    client_name: string;  // updated from name to client_name
    client_email: string;  // updated from email to client_email
    phone_number: string;  // updated from phone to phone_number
}
export interface Meeting {
    id: number;
    client_id: number;
    Meeting_date: string;  // Updated from date to Meeting_date
    meeting_time: string;  // Updated from time to meeting_time
    // Assuming there might be more fields for Meeting based on your server structure
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    API_URL = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    addClient(data: any) {
        return this.http.post<Client>(`${this.API_URL}/client`, data); // Note the type specification here
    }

    getAllClients() {
        return this.http.get<Client[]>(`${this.API_URL}/client`); // Using Client[] type here
    }

    scheduleMeeting(data: any) {
        return this.http.post<Meeting>(`${this.API_URL}/clientmeetings`, data); // And here
    }
}