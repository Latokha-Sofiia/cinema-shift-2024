import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface IDataFilms {
  success: boolean;
  reason?: string;
  films: [
    {
      id: string;
      name: string;
      originalName?: string;
      description?: string;
      releaseDate?: string;
      actors?: [];
      directors?: [];
      runtime?: number;
      ageRating?: string;
      genres?: string[];
      userRatings?: {
        kinopoisk?: string;
        imdb?: string;
      };
      img?: string;
      country?: {
        name?: string;
        code?: string;
        code2?: string;
        id?: number;
      };
    },
  ];
}

interface IDirector {
  fullName: string;
  id: string;
  professions: string[];
}

export interface IDataFilm {
  id: string;
  name: string;
  originalName?: string;
  description?: string;
  releaseDate?: string;
  actors?: [];
  directors?: IDirector[];
  runtime?: number;
  ageRating?: string;
  genres?: string[];
  userRatings: {
    kinopoisk: string;
    imdb?: string;
  };
  img?: string;
  country?: {
    name?: string;
    code?: string;
    code2?: string;
    id?: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class DataFilmsService {
  constructor(private http: HttpClient) {}

  url = 'https://shift-backend.onrender.com/cinema/today';
  load(): Observable<IDataFilms> {
    return this.http.get<IDataFilms>(this.url);
  }
}
