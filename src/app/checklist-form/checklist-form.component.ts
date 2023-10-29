import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ChecklistItem } from '../_models/checklistItem';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checklist-form',
  templateUrl: './checklist-form.component.html',
  styleUrls: ['./checklist-form.component.css'],
})
export class ChecklistFormComponent implements OnInit {
  @Input() public actionName = 'Editar';
  @Input() public checklistItem!: ChecklistItem;
  @Output() public formCloseEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public checklistForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.checklistForm = this.formBuilder.group({
      completed: [
        this.checklistItem != null ? this.checklistItem.completed : false,
        Validators.required,
      ],
      description: [
        this.checklistItem != null ? this.checklistItem.description : '',
        Validators.required,
      ],
      deadline: [
        this.checklistItem != null ? this.checklistItem.deadline : new Date(),
        Validators.required,
      ],
      category: [
        this.checklistItem != null ? this.checklistItem.category : null,
        Validators.required,
      ],
    });
  }

  public onFormClose() {}
}
