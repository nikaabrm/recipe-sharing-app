import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { type Recipe } from '../models/recipe.model';
import { BaseApiService } from '../common/services/base-api.service';

@Injectable({
  providedIn: 'root',
})

export class RecipesService extends BaseApiService<Recipe> {

  private resource ='recipes'
  getAllRecipes() {
    return this.getAll(this.resource);
  }

  getRecipeById(id:string) {
    return this.getById(this.resource,id);
  }

  addRecipe(recipe: Recipe) {
    return this.create(this.resource,recipe);
  }

  updateRecipe(recipe: Partial<Recipe>,id:string) {
    return this.update(this.resource,id,recipe);
  }

  removeRecipe(id:string){
    return this.delete(this.resource,id)
  }
  search(query:string){
    if (!query.trim()) {
      return this.getAll(this.resource); 
    }
    return this.getAll(`${this.resource}/?title_like=${query}`);
  }
}
