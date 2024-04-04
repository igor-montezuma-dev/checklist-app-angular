import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  private defaultDuration = 3000;

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  public showSnackBar(message: string, action: string, durationParam?: number) {
    this._snackBar.open(message, action, {
      duration:
        durationParam != null ? durationParam * 1000 : this.defaultDuration,
    });
  }
}
