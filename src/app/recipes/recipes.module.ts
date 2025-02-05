import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
 
import { RecipeDetailedViewComponent } from './recipe-detailed-view/recipe-detailed-view.component';
import { RouterModule } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';


@NgModule({
  declarations: [RecipesComponent,RecipeDetailedViewComponent,AddRecipeComponent],
  exports: [RecipesComponent],
  imports: [
    CommonModule,
    RouterModule 
  ]
})
export class RecipesModule { }
