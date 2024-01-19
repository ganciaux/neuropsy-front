import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../models/client.model';
import { Location } from '@angular/common';
import { ClientCardComponent } from '../client-card/client-card.component';

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [ClientCardComponent, RouterLink],
  templateUrl: './client-details.component.html',
  styleUrl: './client-details.component.css',
})
export class ClientDetailsComponent implements OnInit {
  client?: Client;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getClient();
  }

  goBack(): void {
    this.location.back();
  }

  getClient(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.clientService
      .getClient(id)
      .subscribe((client) => (this.client = client));
  }
}
