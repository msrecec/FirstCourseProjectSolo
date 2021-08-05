import { Injectable, OnInit } from '@angular/core';
import { IngredientsService } from '../ingredients-service/ingredients.service';
import { Ingredient } from '../../models/ingredient.model';
import { Recipe } from '../../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService implements OnInit {
  ingredients?: Ingredient[];
  recipes?: Recipe[];

  ngOnInit(): void {
    this.ingredients = this.ingredientsService.getIngredients();
    this.recipes = [
      new Recipe('First recipe', [
        this.ingredients[0],
        this.ingredients[1],
        this.ingredients[3],
        this.ingredients[5],
      ]),
      new Recipe('Second recipe', [
        this.ingredients[0],
        this.ingredients[2],
        this.ingredients[3],
        this.ingredients[4],
      ]),
      new Recipe('Third recipe', [
        this.ingredients[1],
        this.ingredients[3],
        this.ingredients[5],
        this.ingredients[6],
      ]),
    ];
  }

  constructor(private ingredientsService: IngredientsService) {}
}
