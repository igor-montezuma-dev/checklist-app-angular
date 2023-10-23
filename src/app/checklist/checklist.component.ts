import { Component, OnInit } from '@angular/core';
import { CATEGORY_DATA } from '../category/category.component';
import { ChecklistItem } from '../_models/checklistItem';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ChecklistEditComponent } from '../checklist-edit/checklist-edit.component';

export const CHECKLIST_DATA = [
  {
    guid: 'aaa-bbb-ccc-ddd',
    completed: false,
    description: 'Ir à academia',
    deadline: Date.now(),
    postDate: Date.now(),
    category: CATEGORY_DATA.find((x) => x.name == 'Saúde'),
  },
  {
    guid: 'aaa-bbb-ccc-ddd',
    completed: true,
    description: 'Reunião com o time',
    deadline: Date.now(),
    postDate: Date.now(),
    category: CATEGORY_DATA.find((x) => x.name == 'Trabalho'),
  },
];

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
})
export class ChecklistComponent implements OnInit {
  public dataSource = CHECKLIST_DATA;

  public displayedColumns: string[] = [
    'id',
    'completed',
    'description',
    'deadline',
    'postDate',
    'category',
    'actions',
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  public createNewItem() {
    console.log('Criar novo item');
    this.dialog
      .open(ChecklistEditComponent, {
        disableClose: true,
        data: {
          actionName: 'Criar',
        },
      })
      .afterClosed()
      .subscribe((resp) => {
        console.log('Janela fechada');
      });
  }

  public updateCompleteStatus(status: boolean) {
    console.log(`Status do item alterado ${status}`);
  }

  public deleteChecklistItem(checklistItem: ChecklistItem) {
    console.log(`Removendo item`);

    this.dialog
      .open(DialogComponent, {
        disableClose: true,
        data: {
          msg: 'Deseja remover este item?',
          leftButtonLabel: 'Cancelar',
          rightButtonLabel: 'Ok',
        },
      })
      .afterClosed()
      .subscribe((resp) => {
        console.log('Janela fechada');
      });
  }

  public updateChecklistItem(checklistItem: ChecklistItem) {
    console.log(`Atualizando item`);
    this.dialog
      .open(ChecklistEditComponent, {
        disableClose: true,
        data: {
          updatableChecklistItem: checklistItem,
          actionName: 'Editar',
        },
      })
      .afterClosed()
      .subscribe((resp) => {
        console.log('Janela fechada');
      });
  }
}
