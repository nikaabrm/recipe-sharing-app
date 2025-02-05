import { Component, inject } from '@angular/core';
import { RECIPES_ARR } from '../database/recipes';
import { Recipe } from '../models/recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: false,
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent {
  recipes = RECIPES_ARR;

  constructor(public router: Router) {}

  navigateToDetailedView(id: string) {
    this.router.navigateByUrl('detailed/' + id);
  }

  openDialog(recipe: Recipe): void {}
}
