import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RECIPES_ARR } from '../../database/recipes';
import { type Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-detailed-view',
  standalone: false,
  templateUrl: './recipe-detailed-view.component.html',
  styleUrl: './recipe-detailed-view.component.scss',
})
export class RecipeDetailedViewComponent {
  recipes = RECIPES_ARR;
  recipeId = '';
  activeRecipe: Recipe | undefined;

  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe((res) => {
     let recipeLocal : Recipe | undefined;
      console.log(res['id']);
      this.recipeId = res['id'];
      recipeLocal = this.recipes.find((recipe) => recipe.id === this.recipeId);
       if(this.recipes.find((recipe) => recipe.id === this.recipeId)){
          this.activeRecipe = recipeLocal;
       }

    });

  }
}
