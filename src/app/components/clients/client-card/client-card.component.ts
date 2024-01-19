import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../../models/client.model';
import { RouterLink } from '@angular/router';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-client-card',
  standalone: true,
  imports: [RouterLink, DatePipe, NgIf],
  templateUrl: './client-card.component.html',
  styleUrl: './client-card.component.css'
})
export class ClientCardComponent implements OnInit{
  @Input() client!: Client|undefined;
  @Input() list!: boolean;

  ngOnInit(): void {
    console.log("ClientCardComponent", this.list)  
  }
}
