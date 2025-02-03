import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesHeaderComponent } from './recipes-header/recipes-header.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RecipesListComponent, RecipesHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recipe-sharing-app';
}
