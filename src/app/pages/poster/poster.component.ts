import { Component, OnInit, Input } from '@angular/core';
import {DataFilmsService, IDataFilms} from "./data-films.service";
import {HttpClient} from "@angular/common/http";
import {interval, timer} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
})
export class PosterComponent implements OnInit {
  @Input() IDataFilms!: IDataFilms;


  constructor(
    private dataFilmsService: DataFilmsService
  ) {}

  dataFilms: any
  ngOnInit(): void {
    this.dataFilmsService.load().subscribe((data) => {
      this.dataFilms = data.films
      console.log(this.dataFilms)
    })
  }

}
