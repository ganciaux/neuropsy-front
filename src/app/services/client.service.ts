import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';
import { CLIENTS } from '../mocks/Clients.mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    //return of(CLIENTS);
    return this.http.get<Client[]>(`${environment.apiURL}/clients`)
  }

  getClient(id: number): Observable<Client | undefined> {
    return of(CLIENTS.find((client) => client.id === id));
  }

  addClient(client: Client): void {
    console.log("addClient:", client )
    CLIENTS.push(client);
  }
}
