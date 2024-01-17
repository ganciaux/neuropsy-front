import { Component } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../../../models/client.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-update',
  standalone: true,
  imports: [],
  templateUrl: './client-update.component.html',
  styleUrl: './client-update.component.css',
})
export class ClientUpdateComponent {
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
