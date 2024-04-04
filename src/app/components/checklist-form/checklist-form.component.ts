import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

import { Category } from '../../_models/category';
import { ChecklistItem } from '../../_models/checklistItem';
import { CategoryService } from '../../services/category/category.service';

@Component({
  selector: 'app-checklist-form',
  templateUrl: './checklist-form.component.html',
  styleUrls: ['./checklist-form.component.css'],
})
export class ChecklistFormComponent implements OnInit {
  @Input() public actionName = 'Editar';
  @Input() public checklistItem!: ChecklistItem;
  @Output() formCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild(FormGroupDirective)
  checklistFormGroupDirective!: FormGroupDirective;
  public categories: Category[] = [];
  public checklistForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService
  ) {}
  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (response: Category[]) => {
        this.categories = response;
        this.buildForm();
      },
      error: (error) => {
        console.error('Erro ao buscar categorias', error);
      },
    });
  }

  private buildForm() {
    this.checklistForm = this.formBuilder.group({
      completed: [
        this.checklistItem ?? null ? this.checklistItem.completed : false,
        Validators.required,
      ],
      description: [
        this.checklistItem ?? null ? this.checklistItem.description : '',
        Validators.required,
      ],
      deadline: [
        this.checklistItem ?? null
          ? new Date(this.checklistItem.deadline)
          : new Date(),
        Validators.required,
      ],
      category: [
        this.checklistItem ?? null ? this.checklistItem.category : null,
        Validators.required,
      ],
    });
  }

  private clearForm() {
    this.checklistForm.reset();
    this.checklistFormGroupDirective.resetForm();
  }

  save() {
    this.formCloseEvent.emit(true);
  }

  cancel() {
    this.formCloseEvent.emit(false);
  }
}
