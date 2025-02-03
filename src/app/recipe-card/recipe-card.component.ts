import { Component, Input } from '@angular/core';
import { type Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  imports: [],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  @Input({required:true}) recipe!: Recipe;

}
