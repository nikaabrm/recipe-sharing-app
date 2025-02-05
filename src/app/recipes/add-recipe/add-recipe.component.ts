import { Component } from '@angular/core';

@Component({
  selector: 'app-add-recipe',
  standalone: false,
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss'
})
export class AddRecipeComponent {
  ingredientInputs= [{}];
  onIngredientInputAdd(){
    this.ingredientInputs.push({})
    this.ingredientInputs = this.ingredientInputs
  }
}
