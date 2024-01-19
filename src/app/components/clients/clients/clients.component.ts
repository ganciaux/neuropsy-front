import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client.model';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../../services/client.service';
import { RouterLink } from '@angular/router';
import { ClientCardComponent } from '../client-card/client-card.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [FormsModule, NgFor, DatePipe, RouterLink, ClientCardComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
})
export class ClientsComponent implements OnInit {
  clients?: Client[] = [];
  filteredClient?: Client[];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.getClients();
  }

  getClients(): void {
    this.clientService
      .getClients()
      .subscribe((clients) => (this.clients = clients));
    this.clientService
      .getClients()
      .subscribe((clients) => (this.filteredClient = clients));
  }

  onChange(event: Event) {
    const pattern = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredClient = this.clients?.filter(
      (client) =>
        client.name?.toLowerCase().includes(pattern) ||
        client.firstname?.toLowerCase().includes(pattern)
    );
  }

  onSearch(event: Event) {
    this.filteredClient = this.clients;
  }
}
