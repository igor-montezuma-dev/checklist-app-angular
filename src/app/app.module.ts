import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryComponent } from './category/category.component';
import { ChecklistEditComponent } from './checklist-edit/checklist-edit.component';
import { ChecklistFormComponent } from './checklist-form/checklist-form.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { DialogComponent } from './dialog/dialog.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    CategoryEditComponent,
    CategoryFormComponent,
    DialogComponent,
    ChecklistComponent,
    ChecklistEditComponent,
    ChecklistFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
