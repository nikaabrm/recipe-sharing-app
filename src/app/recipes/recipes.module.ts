import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailedViewComponent } from './recipe-detailed-view/recipe-detailed-view.component';
import { RouterModule } from '@angular/router';
import { RecipeForm } from './recipe-form/recipe-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { ModalComponent } from '../modal/modal.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
@NgModule({
  declarations: [RecipesComponent,RecipeDetailedViewComponent,RecipeForm,RecipesListComponent],
  exports: [RecipesComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ModalComponent,
    MatDialogModule,
    FormsModule
  ]
})
export class RecipesModule { }
