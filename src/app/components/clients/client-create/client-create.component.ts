import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
import { BrowserModule } from '@angular/platform-browser';

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
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  goBack(): void {
    this.location.back();
  }

  createForm() {
    // Créez le formulaire avec les champs correspondants au modèle Client
    this.clientForm = this.formBuilder.group({
      id: [null], // Vous pouvez ajouter des validateurs ici si nécessaire
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
    console.log('onSubmit');
    // Logique à exécuter lors de la soumission du formulaire
    if (this.clientForm?.valid) {
      const formData: Client = this.clientForm.value;
      // Vous pouvez maintenant utiliser formData pour effectuer des opérations
      console.log(formData);
    } else {
      console.log('error');
      // Gérez les erreurs de validation si nécessaire
    }
  }
}
