import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../../_models/category';
import { ChecklistItem } from '../../_models/checklistItem';

export const CHECKLIST_DATA = [
  {
    guid: 'aaa-bbb-ccc-ddd',
    completed: false,
    description: 'Ir à academia',
    deadline: new Date(),
    postDate: new Date(),
    category: { guid: 'aaa-bbb-ccc-ddd', name: 'Saúde' }
  },
  {
    guid: 'aaa-bbb-ccc-ddd',
    completed: true,
    description: 'Reunião com o time',
    deadline: new Date(),
    postDate: new Date(),
    category: { guid: 'aaa-bbb-ccc-ddd', name: 'Trabalho' }
  },
];

@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  constructor() {}

  public getAllChecklistItems() : Observable<ChecklistItem[]> {
    return of (CHECKLIST_DATA);
  }
}
