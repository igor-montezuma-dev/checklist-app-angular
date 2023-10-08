import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Category } from '../_models/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css'],
})
export class CategoryEditComponent implements OnInit {
  public editableCategory: Category;
  public actionName: string = 'Editar';

  constructor(
    private dialogRef: MatDialogRef<CategoryEditComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: any
  ) {
    if (dialogData.editableCategory != null) {
      this.editableCategory = dialogData.editableCategory;
    }
  }
  ngOnInit(): void {}

  public closeModalWindow($event: any) {
    if ($event != null) {
      this.dialogRef.close();
    }
  }
}