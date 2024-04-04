import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from '../../_models/category';

import { DialogComponent } from '../../dialog/dialog.component';
import { CategoryService } from '../../services/category/category.service';
import { CategoryEditComponent } from '../category-edit/category-edit.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: Category[] = [];

  constructor(
    private dialog: MatDialog,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService
      .getAllCategories()
      .subscribe((categories: Category[]) => {
        this.dataSource = categories;
      });
  }

  public editCategory(inputCategory: Category) {
    console.log('Clicou');

    this.dialog
      .open(CategoryEditComponent, {
        disableClose: true,
        data: {
          editableCategory: inputCategory,
        },
      })
      .afterClosed()
      .subscribe((resp) => {
        console.log('Modal editar fechada.');
      });
  }
  public deleteCategory(category: Category) {
    this.dialog
      .open(DialogComponent, {
        disableClose: true,
        data: {
          dialogMsg: 'Deseja continuar com esta ação?',
          leftButtonLabel: 'Cancelar',
          rightButtonLabel: 'Confirmar',
        },
      })
      .afterClosed()
      .subscribe((resp) => {
        if (resp) {
          console.log('Categoria removida!');
        } else {
          console.log('Erro ao remover categoria.');
        }
      });
  }
  public createNewCategory() {
    this.dialog
      .open(CategoryEditComponent, {
        disableClose: true,
        data: {
          actionName: 'Criar',
        },
      })
      .afterClosed()
      .subscribe((resp) => {
        console.log('Modal criar fechada.');
      });
  }
}
