import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailedViewComponent } from './recipes/recipe-detailed-view/recipe-detailed-view.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';

export const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    pathMatch: 'full',
  },

  {
    path: 'detailed/:id',
    component: RecipeDetailedViewComponent,
  },
  {
    path: 'add-recipe',
    component: AddRecipeComponent,
  },
  
  {
    path: '**',
    component: RecipesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
