import { Component, Input,inject } from '@angular/core';
import { type Recipe } from '../models/recipe.model';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RecipeDetailedViewComponent } from '../recipe-detailed-view/recipe-detailed-view.component'
import {
  MatDialog,
} from '@angular/material/dialog';

@Component({
  selector: 'app-recipe-card',
  imports: [MatSlideToggleModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  @Input({required:true}) recipe!: Recipe;
  readonly dialog = inject(MatDialog);
  openDialog(recipe: Recipe): void {
    const dialogRef = this.dialog.open(RecipeDetailedViewComponent, {
      width: '100vw',
      panelClass:'mat-dialog-fulscreen',
      data: recipe
    });
  }
 
 
}
