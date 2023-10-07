import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.leftButtonLabel != undefined) {
      this.leftButtonLabel = data.leftButtonLabel;
    }

    if (data.rightButtonLabel != undefined) {
      this.rightButtonLabel = data.rightButtonLabel;
    }

    if (data.dialogMsg != undefined) {
      this.dialogMsg = data.dialogMsg;
    }
  }

  public dialogMsg = 'Deseja continuar com esta ação?';
  public leftButtonLabel = 'Cancelar';
  public rightButtonLabel = 'Confirmar';

  ngOnInit(): void {}

  public clickLeftButton() {
    this.dialogRef.close(false);
  }

  public clickRightButton() {
    this.dialogRef.close(true);
  }
}
