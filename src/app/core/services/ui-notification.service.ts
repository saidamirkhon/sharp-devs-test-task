import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class UiNotificationService {
  show(message: string): void {
    this.matSnackBar.open(message, 'Close', {
      duration: 5000
    });
  }

  constructor(private matSnackBar: MatSnackBar) {
  }
}
