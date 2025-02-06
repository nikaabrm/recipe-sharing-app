import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  standalone: false,
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss',
})
export class RecipesListComponent {
  @Input({ required: true }) recipes!: Recipe[];
  @Output() recipeId = new EventEmitter;
  constructor(public router: Router) {}

  navigateToDetailedRecipe(id: string) {
    this.recipeId.emit(id);
  }
}
