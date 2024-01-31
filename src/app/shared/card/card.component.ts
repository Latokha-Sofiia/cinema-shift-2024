import {Component, Input, OnInit} from '@angular/core';
import { IDataFilm } from '../../pages/poster/data-films.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() dataFilm!: IDataFilm;
  constructor() { }

  ngOnInit(): void {
  }

}
