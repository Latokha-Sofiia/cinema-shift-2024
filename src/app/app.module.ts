import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IconComponent } from './shared/icon/icon.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PosterComponent } from './pages/poster/poster.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { CardComponent } from './shared/card/card.component';
import { DataFilmsService } from './pages/poster/data-films.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieCardComponent } from './pages/movie-card/movie-card.component';
import { StarsComponent } from './shared/stars/stars.component';
import { SeatControlComponent } from './components/seat-control/seat-control.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconComponent,
    ProfileComponent,
    PosterComponent,
    TicketsComponent,
    CardComponent,
    MovieCardComponent,
    StarsComponent,
    SeatControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [IconComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
