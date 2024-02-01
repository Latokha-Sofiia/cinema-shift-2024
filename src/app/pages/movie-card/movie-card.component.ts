import { Component, Input, OnInit } from '@angular/core';
import { DataFilmsService, IDataFilm } from '../poster/data-films.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() dataFilm!: IDataFilm;
  constructor() {}

  ngOnInit(): void {}
}
