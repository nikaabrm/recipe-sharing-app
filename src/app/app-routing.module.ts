import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailedViewComponent } from './recipes/recipe-detailed-view/recipe-detailed-view.component';
import { RecipeForm } from './recipes/recipe-form/recipe-form.component';

export const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    pathMatch: 'full',
  },

  {
    path: 'detail/:id',
    component: RecipeDetailedViewComponent,
  },
  {
    path: 'add-recipe',
    component: RecipeForm,
  },
  {
    path: 'edit/:id',
    component: RecipeForm,
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
