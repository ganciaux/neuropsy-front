import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { Location, NgIf } from '@angular/common';
import { Client } from '../../../models/client.model';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-client-create',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './client-create.component.html',
  styleUrl: './client-create.component.css',
})
export class ClientCreateComponent {
  clientForm: FormGroup = this.formBuilder.group({});

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private location: Location,
    private formBuilder: FormBuilder,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  goBack(): void {
    this.location.back();
  }

  createForm() {
    this.clientForm = this.formBuilder.group({
      id: [null],
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      birthdate: [null, Validators.required],
      phone: [''],
      gsm: [''],
      //phone: ['', Validators.pattern('[0-9]{10}')],
      //gsm: ['', Validators.pattern('[0-9]{10}')],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      city: [''],
      country: [''],
      zip: [''],
    });
  }

  onSubmit() {
    if (this.clientForm?.valid) {
      const formData: Client = this.clientForm.value;
      this.clientService.addClient(formData);
      this.router.navigate(['/clients']);

    } else {
      console.log('error');      
    }
  }
}
