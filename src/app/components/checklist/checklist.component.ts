import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChecklistItem } from '../../_models/checklistItem';

import { DialogComponent } from '../../dialog/dialog.component';
import { ChecklistService } from '../../services/checklist/checklist.service';
import { SnackbarService } from '../../services/snackbar/snackbar.service';
import { ChecklistEditComponent } from '../checklist-edit/checklist-edit.component';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
})
export class ChecklistComponent implements OnInit {
  public dataSource: ChecklistItem[] = [];

  public displayedColumns: string[] = [
    'id',
    'completed',
    'description',
    'deadline',
    'postDate',
    'category',
    'actions',
  ];

  constructor(
    private dialog: MatDialog,
    private checklistService: ChecklistService,
    private snackBarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.checklistService.getAllChecklistItems().subscribe({
      next: (response: ChecklistItem[]) => {
        this.dataSource = response;
      },
      error: (error) => {
        console.error('Erro ao buscar itens da checklist', error);
      },
    });
  }

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
        if (resp) {
          this.snackBarService.showSnackBar('Item criado!', 'ok');
        }
      });
  }

  public updateCompleteStatus(status: boolean) {
    console.log(`Status do item alterado ${status}`);
  }

  public deleteChecklistItem(checklistItem: ChecklistItem) {
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
        if (resp) {
          this.snackBarService.showSnackBar('Item removido!', 'ok');
        }
      });
  }

  public updateChecklistItem(checklistItem: ChecklistItem) {
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
        if (resp) {
          this.snackBarService.showSnackBar('Item atualizado!', 'ok');
        }
      });
  }
}
