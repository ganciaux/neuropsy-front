import { Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients/clients.component';
import { FormsComponent } from './components/forms/forms/forms.component';
import { PagesComponent } from './components/pages/pages/pages.component';
import { ItemsComponent } from './components/items/items/items.component';
import { ClientDetailsComponent } from './components/clients/client-details/client-details.component';
import { ClientCreateComponent } from './components/clients/client-create/client-create.component';
import { ClientUpdateComponent } from './components/clients/client-update/client-update.component';

export const routes: Routes = [
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/details/:id', component: ClientDetailsComponent },
  { path: 'clients/update/:id', component: ClientUpdateComponent },
  { path: 'clients/add', component: ClientCreateComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'items', component: ItemsComponent },
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
];
