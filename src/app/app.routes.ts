import { Routes } from '@angular/router';
import { ListImmeubleHotel } from './list-immeuble-hotel/list-immeuble-hotel';
import { DetailImmeuble } from './detail-immeuble/detail-immeuble';

export const routes: Routes = [
  { path: 'details/:id', component: DetailImmeuble },

  { path: '', component: ListImmeubleHotel }
];