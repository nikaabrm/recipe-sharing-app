import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../../models/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-recipe',
  standalone: false,
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.scss',
})
export class RecipeForm implements OnInit {
  isEditMode = false;
  ingredientInputs = [{}];
  lastRecipeId = 0;
  recipeAddedSuccessfully = false;
  base64Image: string | null = null; 

  recipeForm: FormGroup;
  recipe: Recipe | undefined;

 
 

  get titleControl(){
    return this.recipeForm.get('title');
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  constructor(private recipesService: RecipesService, 
    private router: Router, 
    private readonly activatedRoute:ActivatedRoute) {

  

    this.recipeForm = new FormGroup({
      title: new FormControl('', Validators.required),
      image: new FormControl('', [
        Validators.required
      ]),
      ingredients: new FormArray([this.createIngredient()]),
      shortDescription: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(500),
      ]),
    });
  

  }


  ngOnInit():void{
    this.activatedRoute.paramMap.subscribe((params) => {
      const recipeId= params.get('id')

      if(!recipeId){
        return;
      }

      this.isEditMode = true;
      this.loadData(recipeId);

    });
  }

  createIngredient(): FormGroup {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      dimension:new FormControl('', Validators.required),
    });
  }

  addIngredient() {
    this.ingredients.push(this.createIngredient());
  }

  removeIngredient(index: number) {
    if (this.ingredients.length > 1) {
      this.ingredients.removeAt(index);
    }
  }

  // Convert selected image to Base64
  handleImageUpload(event: any):void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.base64Image = reader.result as string;
        this.recipeForm.patchValue({ image: this.base64Image });
      };
    }
  }

  loadData(id:string){
    this.recipesService.getRecipeById(id).subscribe((recipe) => {
      this.recipe = recipe;
      
      
      this.recipeForm.patchValue({
        title: recipe.title,
        shortDescription:recipe.descriptionShort,
        description:recipe.description,
        image: recipe.image
      });

      this.base64Image = recipe.image;

      this.ingredients.clear();
      recipe.ingredients.forEach((ingredient: any) => {
        this.ingredients.push(new FormGroup({
          name: new FormControl(ingredient.name, Validators.required),
          amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern("^[0-9]*$")]),
          dimension: new FormControl(ingredient.dimension, Validators.required)
        }));
      });
    })  
  }

  saveRecipe() {

    if(!this.recipeForm.valid){
      return;
    }

      const formValue = {
        title: this.recipeForm.value.title,
        image:
          this.recipeForm.value.image,
        descriptionShort:
          this.recipeForm.value.shortDescription ,
        ingredients:this.recipeForm.value.ingredients,
        description: this.recipeForm.value.description,
      }

  
      if(this.isEditMode && this.recipe){
        this.recipesService.updateRecipe(formValue,this.recipe.id).subscribe((res) => {
          this.router.navigateByUrl('/')
      })
        
      }else{
        this.recipesService.addRecipe({
          id: String(new Date().getTime()),
          ...formValue
        }).subscribe((res) => {
          this.router.navigateByUrl('/')
      })
      }

  }

}
