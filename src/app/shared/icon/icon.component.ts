import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { IconService } from './icon.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent {
  private _path!: string;

  constructor(
    private iconService: IconService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  @Input()
  get path(): string {
    return this._path;
  }

  set path(value) {
    if (value !== this.path) {
      this.updateIcon(value).then(() => {
        this._path = value;
      });
    }
  }

  private async updateIcon(iconPath: string): Promise<void> {
    const icon = await this.iconService.getIcon(iconPath);
    const childCount = this.elementRef.nativeElement.children.length;

    if (childCount) {
      this.renderer.removeChild(
        this.elementRef.nativeElement,
        this.elementRef.nativeElement.children[0],
      );
    }

    this.renderer.appendChild(this.elementRef.nativeElement, icon);
  }
}
