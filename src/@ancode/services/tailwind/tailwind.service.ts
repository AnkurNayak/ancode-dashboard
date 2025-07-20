import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AncodeTailwindService {
  private _tailwindConfigSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public tailwindConfig$: Observable<any> = this._tailwindConfigSubject.asObservable();

  constructor() {
    // Replace this code with your logic to fetch the tailwind theme responsive layout
    // Example:
    const tailwindConfig = {
      breakpoints: {
        sm: 'screen and (min-width: 600px)',
        md: 'screen and (min-width: 960px)',
        lg: 'screen and (min-width: 1280px)',
        xl: 'screen and (min-width: 1440px)',
      },
      scheme:{
        light : 'light',
        dark : 'dark'
      },
    };

    // Set the tailwindConfig value
    this._tailwindConfigSubject.next(tailwindConfig);
  }
}