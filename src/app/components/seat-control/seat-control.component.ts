import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieCardComponent } from '../../pages/movie-card/movie-card.component';
import { DataTimetableService } from '../../pages/movie-card/timetable.service';

enum ESeatState {
  taken,
  free,
  chosen,
}

interface ISeatPlace {
  state: ESeatState;
}

interface ISeatCord {
  row: number;
  column: number;
}

@Component({
  selector: 'app-seat-control',
  templateUrl: './seat-control.component.html',
  styleUrls: ['./seat-control.component.scss'],
})
export class SeatControlComponent implements OnInit {
  colorHall?: string;
  dateAndTime?: string;
  seatsInfo!: ISeatPlace[][];
  selectedSeats: ISeatCord[] = [];

  ESeatState = ESeatState;
  constructor(private movieCardComponent: MovieCardComponent) {}
  ngOnInit(): void {
    this.fillSeatInfo();
  }

  fillSeatInfo(): void {
    const rowCount = 6;
    const columnCount = 10;
    this.seatsInfo = Array(rowCount)
      .fill(false)
      .map(() => {
        return Array(columnCount)
          .fill(false)
          .map(() => {
            return {
              state: ESeatState.free,
            };
          });
      });
  }

  choosePlace(row: number, column: number): void {
    const selectedSeat = this.seatsInfo[row][column];
    if (selectedSeat.state === ESeatState.taken) {
      return;
    }
    if (selectedSeat.state === ESeatState.free) {
      selectedSeat.state = ESeatState.chosen;
      this.selectedSeats.push({
        row: row,
        column: column,
      });
      return;
    }
    if (selectedSeat.state === ESeatState.chosen) {
      selectedSeat.state = ESeatState.free;
      this.selectedSeats = this.selectedSeats.filter((seat) => {
        return seat.row !== row || seat.column !== column;
      });
    }
  }

  getColorHall() {
    this.colorHall = this.movieCardComponent.colorHall;
    console.log(this.colorHall);
    return this.colorHall;
  }

  getDateAndTime() {
    this.dateAndTime =
      this.movieCardComponent?.dateTime.toString() +
      ' ' +
      this.movieCardComponent?.seanceTime.toString();
    return this.dateAndTime;
  }
}
