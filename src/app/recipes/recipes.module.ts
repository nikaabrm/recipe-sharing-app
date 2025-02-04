import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipesHeaderComponent } from './recipes-header/recipes-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RecipeDetailedViewComponent } from './recipe-detailed-view/recipe-detailed-view.component';


@NgModule({
  declarations: [RecipesComponent,RecipesHeaderComponent,RecipeDetailedViewComponent],
  exports: [RecipesComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class RecipesModule { }
