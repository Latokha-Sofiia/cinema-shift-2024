import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private iconCash: Map<string, Promise<SVGElement>> = new Map();

  async getIcon(iconPath: string): Promise<SVGElement> {
    let icon = this.iconCash.get(iconPath);

    if (!icon) {
      icon = this.loadIcon(iconPath);
      this.iconCash.set(iconPath, icon);
    }
    return this.cloneSVG(await icon);
  }

  private async loadIcon(iconPath: string): Promise<SVGElement> {
    try {
      const icon = await this.fetch(iconPath);
      return this.getSvgFromText(icon);
    } catch (error) {
      throw new Error('Не удалось загрузить иконку');
    }
  }

  private cloneSVG(svg: SVGElement): SVGElement {
    return svg.cloneNode(true) as SVGElement;
  }

  private fetch(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.onload = () => resolve(xhr.response);
      xhr.onerror = reject;

      xhr.responseType = 'text';
      xhr.open('GET', url);
      xhr.send();
    });
  }

  private getSvgFromText(svgText: string): SVGElement {
    const wrapper = document.createElement('DIV');
    wrapper.insertAdjacentHTML('beforeend', svgText);
    return wrapper.querySelector('svg') as SVGElement;
  }
}
