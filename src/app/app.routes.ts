import { Routes } from '@angular/router';
import { ClientsComponent } from './composants/clients/clients/clients.component';
import { FormsComponent } from './composants/forms/forms/forms.component';
import { PagesComponent } from './composants/pages/pages/pages.component';
import { ItemsComponent } from './composants/items/items/items.component';
import { ClientDetailsComponent } from './composants/clients/client-details/client-details.component';
import { ClientCreateComponent } from './composants/clients/client-create/client-create.component';

export const routes: Routes = [
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/details/:id', component: ClientDetailsComponent },
  { path: 'clients/add', component: ClientCreateComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'items', component: ItemsComponent },
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
];
