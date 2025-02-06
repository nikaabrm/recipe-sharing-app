import { Component, inject, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { type Recipe } from '../../models/recipe.model';
import { RecipesService } from '../recipes.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-recipe-detailed-view',
  standalone: false,
  templateUrl: './recipe-detailed-view.component.html',
  styleUrl: './recipe-detailed-view.component.scss',
})
export class RecipeDetailedViewComponent {
  recipeId = '0';
  recipe: Recipe | undefined;
  readonly dialog = inject(MatDialog);
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly recipesService: RecipesService,
    private readonly matDialogRef: MatDialogRef<ModalComponent>,
    private readonly router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      const recipeId= params.get('id')
      if(!recipeId){
        return;
      }

      if(!recipeId){
        return;
      }
      
      this.recipesService.getRecipeById(recipeId).subscribe((recipe) => {
        this.recipe = recipe;
      });
    });
  }

  onRecipeEdit(){
    if(!this.recipe){
      return;
    }

    this.router.navigate(['edit',this.recipe.id])
  }
  onRecipeDelete() {
   
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '300px',
      height: '200px',
    });

    dialogRef.afterClosed().subscribe((res) => {
      if(!this.recipe || !res){
        return;
      }
  
        this.recipesService.removeRecipe(this.recipe.id).subscribe((res) => {
          console.log(res);
          const dialogRefDeleted = this.dialog.open(ModalComponent, {
            width: '300px',
            height: '200px',
            data: {
              title:'Recipe Deleted'
            }
          });
          setTimeout(() => {
             dialogRefDeleted.close();
             this.router.navigate(['/'])
          }, 1000);
        });
    });
  }
}
