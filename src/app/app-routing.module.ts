import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosterComponent } from './pages/poster/poster.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MovieCardComponent } from './pages/movie-card/movie-card.component';

const routes: Routes = [
  {
    path: 'tickets',
    component: TicketsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'poster',
    component: PosterComponent,
  },
  {
    path: 'movie-card',
    component: MovieCardComponent,
  },
  {
    path: '',
    component: PosterComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
