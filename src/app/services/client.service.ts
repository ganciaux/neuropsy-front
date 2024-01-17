import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';
import { CLIENTS } from '../mocks/Clients.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor() {}

  getClients(): Observable<Client[]> {
    return of(CLIENTS);
  }

  getClient(id: number): Observable<Client | undefined> {
    return of(CLIENTS.find((client) => client.id === id));
  }
}
