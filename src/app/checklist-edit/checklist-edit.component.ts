import { Component, Inject, OnInit } from '@angular/core';
import { ChecklistItem } from '../_models/checklistItem';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-checklist-edit',
  templateUrl: './checklist-edit.component.html',
  styleUrls: ['./checklist-edit.component.css'],
})
export class ChecklistEditComponent implements OnInit {
  public actionName = 'Editar';
  public checklistItem!: ChecklistItem;

  constructor(
    public modalRef: MatDialogRef<ChecklistEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.updatableChecklistItem != null) {
      this.checklistItem = data.updatableChecklistItem;
    }

    if (data.actionName != null) {
      this.actionName = data.actionName;
    }
  }
  ngOnInit(): void {}

  public onFormClose($event: any) {
    this.modalRef.close();
  }
}
