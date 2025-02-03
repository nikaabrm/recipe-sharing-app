import { Component } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { Recipes } from '../data/recipes';

@Component({
  selector: 'app-recipes-list',
  imports: [RecipeCardComponent],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss'
})
export class RecipesListComponent {
recipes = Recipes;

}
