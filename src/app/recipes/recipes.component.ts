import { Component, inject, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Router } from '@angular/router';
import { RecipesService } from './recipes.service';
import { debounceTime, distinctUntilChanged, finalize, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-recipes',
  standalone: false,
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];
  searchQuery = ''; 
  isSearching = false;
  initialLoading = true;
  private searchSubject = new Subject<string>();

  constructor(
    public router: Router, 
    private recipesService: RecipesService) {
  
  }

  ngOnInit(): void {
    this.recipesService.getAllRecipes().subscribe((res) => {
      this.initialLoading = false;
      this.recipes = res;
   })
  

  this.searchSubject.pipe(
    
    debounceTime(600),          
    distinctUntilChanged(),        
    switchMap(query => {
      this.isSearching = true;
      return this.recipesService.search(query)
  }),
  ).subscribe((data:Recipe[]) => {
    this.isSearching = false
    this.recipes = data;  // Update the food list with filtered data
  });
}

onSearch() {
  this.searchSubject.next(this.searchQuery);  // Trigger search whenever user types
}

  navigateToDetailedView(id: string) {
    this.router.navigate(['detail',id]);
  }

}
