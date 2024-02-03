import { Component, Input, OnInit } from '@angular/core';
import { DataFilmsService, IDataFilm } from '../poster/data-films.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {
  DataTimetableService,
  ISeances,
  ITimetable,
  IDataTimetable,
} from './timetable.service'; // если без перехода на другие странички

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() ITimetable!: ITimetable;
  @Input() IDataTimetable!: IDataTimetable;

  cardId!: string;
  dataFilm: IDataFilm | undefined = undefined;
  description?: string | undefined;
  isDescriptionOpen = false;
  dataTimetable?: ITimetable[];
  dateTime: string = '';
  seanceTime: string = '';
  seancesInRedHall?: ISeances[];
  seancesInBlueHall?: ISeances[];
  seancesInGreenHall?: ISeances[];
  colorHall?: string;

  selectedPlaces?: []


  constructor(
    private dataTimetableService: DataTimetableService,
    private route: ActivatedRoute,
    private router: Router, // если без перехода на другие странички
    private dataFilmsService: DataFilmsService,
  ) {}

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id)    если без перехода на другие странички
    this.route.url.subscribe(
      (value) => (this.cardId = value[1].path.toString()),
    );

    this.dataFilmsService.load().subscribe((data) => {
      this.dataFilm = data.films.find((film) => film.id === this.cardId);
      if (this.dataFilm === undefined) {
        this.router.navigate(['/poster']);
      } else {
        this.description = this.dataFilm.description;
      }
    });

    this.dataTimetableService.load(this.cardId).subscribe((timetable) => {
      this.dataTimetable = timetable.schedules;
      this.dateTimeActive(this.dataTimetable[0].date);
      console.log(this.dataTimetable);
    });
  }

  openDescription(): void {
    this.isDescriptionOpen = true;
  }

  dateTimeActive(time: string) {
    this.dateTime = time;
    this.filterSeances();
    this.seanceTime = '';
  }
  private filterSeances(): void {
    const timetable = this.dataTimetable?.find((timetable) => {
      return this.dateTime === timetable.date;
    });

    if (!timetable) {
      return;
    }

    this.seancesInRedHall = this.getSeancesByHall(timetable, 'Red');
    this.seancesInBlueHall = this.getSeancesByHall(timetable, 'Blue');
    this.seancesInGreenHall = this.getSeancesByHall(timetable, 'Green');

  }

  private getSeancesByHall(timetable: ITimetable, color: string): ISeances[] {
    return (
      timetable?.seances.filter((seance) => {
        return seance.hall?.name === color;
      }) ?? []
    );
  }

  seancesTimeActive(seance: string, color: string) {
    this.colorHall = color;
    this.seanceTime = seance;
  }
}
