import { Component, inject } from '@angular/core';
import { RECIPES_ARR } from '../data/recipes';
import { RecipeDetailedViewComponent } from './recipe-detailed-view/recipe-detailed-view.component'
import {
  MatDialog,
} from '@angular/material/dialog';
import { Recipe } from '../models/recipe.model';


@Component({
  selector: 'app-recipes',
  standalone: false,
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {
  recipes = RECIPES_ARR;
    readonly dialog = inject(MatDialog);
    openDialog(recipe: Recipe): void {
      const dialogRef = this.dialog.open(RecipeDetailedViewComponent, {
        width: '100vw',
        panelClass:'mat-dialog-fulscreen',
        data: recipe
      });
    }

}
