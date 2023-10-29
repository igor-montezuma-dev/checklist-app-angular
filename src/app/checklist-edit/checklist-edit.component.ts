import { Component, OnInit } from '@angular/core';
import { ChecklistItem } from '../_models/checklistItem';

@Component({
  selector: 'app-checklist-edit',
  templateUrl: './checklist-edit.component.html',
  styleUrls: ['./checklist-edit.component.css'],
})
export class ChecklistEditComponent implements OnInit {
  public actionName = 'Editar';
  public checklistItem!: ChecklistItem;

  constructor() {}
  ngOnInit(): void {}

  public onFormClose($event: any) {
    console.log('onFormClose', $event);
  }
}
