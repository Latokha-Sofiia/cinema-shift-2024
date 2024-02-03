import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
})
export class StarsComponent {
  isStarsYellow: boolean[] = Array(5).fill(false);
  private _stars!: string;
  @Input()
  get stars(): string | undefined {
    return this._stars;
  }

  set stars(value) {
    if ((value !== this.stars) && (value !== undefined)) {
      this._stars = value;
      const starsNumber: number = Math.round(Number(value) / 2);
      this.isStarsYellow = this.isStarsYellow.map((value, index) => {
        return index < starsNumber;
      });
    }
  }
}
