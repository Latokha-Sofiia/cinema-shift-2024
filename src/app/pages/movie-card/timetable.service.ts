import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DataFilmsService } from '../poster/data-films.service';
import { MovieCardComponent } from './movie-card.component';

export interface ITimetable {
  date: string;
  seances: ISeances[]
}

export interface ISeances {
  time: string;
  hall?: {
    name?: string;
    places?: IDataPlaces;
  };
  payedTickets?: IPayTickets[];
}

interface IPayTickets {
  filmId?: string;
  row?: number;
  column?: number;
  seance?: {
    date?: string;
    time?: string;
  };
  phone?: string;
}
export interface IDataTimetable {
  success?: true;
  reason?: string;
  schedules: ITimetable[];
}

interface IDataPlaces {
  places?: IDataPlace[];
}

interface IDataPlace {
  price?: number;
  type?: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataTimetableService {
  filmId!: string;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  @Input() cardId!: string;

  // load(): void {
  load(cardId: string): Observable<IDataTimetable> {
    this.filmId = cardId;
    return this.http.get<IDataTimetable>(
      'https://shift-backend.onrender.com/cinema/film/' +
        this.filmId +
        '/schedule',
    );
  }
}
