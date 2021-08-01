import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _matSnackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string = "OK", duration: number = 3000): void {
    this._matSnackBar.open(message, action, { duration });
  }
}
