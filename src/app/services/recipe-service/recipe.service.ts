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

  /**
   * Gets the list of recipes
   *
   * @returns recipes in the array of recipes
   */

  getRecipes(): Recipe[] {
    if (typeof this.recipes !== 'undefined') {
      return this.recipes;
    } else {
      return [];
    }
  }

  /**
   * Compares two ingredients
   *
   * @param ingredient1
   * @param ingredient2
   * @returns true if the two ingredients are equal
   */

  compareIngredients(
    ingredient1: Ingredient,
    ingredient2: Ingredient
  ): boolean {
    return (
      ingredient1.name.localeCompare(ingredient2.name) === 0 &&
      ingredient1.halal === ingredient2.halal
    );
  }

  /**
   * Compares if the two arrays of ingredients are equal
   *
   * @param ingredients1
   * @param ingredients2
   * @returns true if two ingredient arrays are equal
   */

  compareIngredientArrays(
    ingredients1: Ingredient[],
    ingredients2: Ingredient[]
  ): boolean {
    let selectedIngredientsEquals = false;
    let selectedIngredientsCount = 0;
    ingredients1.forEach((i) => {
      ingredients2.forEach((ingredient) => {
        if (this.compareIngredients(i, ingredient)) {
          ++selectedIngredientsCount;
        }
      });
      if (selectedIngredientsCount === ingredients1.length) {
        selectedIngredientsEquals = true;
      }
      selectedIngredientsCount = 0;
    });
    return selectedIngredientsEquals;
  }

  /**
   * Compares if the two ingredient names are equal
   *
   * @param name1
   * @param name2
   * @returns true if names are equal
   */

  compareNames(name1: string, name2: string): boolean {
    return name1.localeCompare(name2) === 0;
  }

  /**
   * Compares if the recipes are equal
   *
   * @param recipe1 first recipe
   * @param recipe2 second recipe
   * @returns true if recipes are equal
   */

  compareRecipes(recipe1: Recipe, recipe2: Recipe): boolean {
    return (
      this.compareNames(recipe1.name, recipe2.name) &&
      this.compareIngredientArrays(recipe1.ingredients, recipe2.ingredients)
    );
  }

  /**
   * Adds the recipe to the list of recipes
   *
   * @param recipe
   */

  addRecipe(recipe: Recipe): void {
    let comparedRecipes = false;
    this.recipes?.forEach((r) => {
      if (this.compareRecipes(r, recipe)) {
        comparedRecipes = true;
      }
    });
    if (comparedRecipes) {
      alert('The two recipes are equal');
    } else {
      this.recipes?.push(recipe);
    }
  }
}
