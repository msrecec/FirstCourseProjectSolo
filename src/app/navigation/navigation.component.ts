import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  selectedIngredients: Ingredient[] = [];

  ingredients: Ingredient[] = [
    new Ingredient('pork', false),
    new Ingredient('carrot', true),
    new Ingredient('chicken', true),
    new Ingredient('potato', true),
    new Ingredient('rice', true),
    new Ingredient('pork fat', false),
    new Ingredient('eggs', true),
  ];

  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit(): void {}

  /**
   * Added new Ingredient to the list
   *
   * @param ingredient new ingredient
   */

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  /**
   * Adds the ingredients to the list of shopping items
   *
   * @param selectedIngredients selected ingredients emitted by EventEmitter
   */

  addShoppingItems(selectedIngredients: Ingredient[]) {
    this.selectedIngredients = JSON.parse(JSON.stringify(selectedIngredients));
  }

  /**
   * Adds new recipe item
   *
   * @param recipe new recipe
   */

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  /**
   * Clears new recipe item from the list of recipes
   *
   */

  clearRecipe(recipe: Recipe) {
    const index = this.recipes.indexOf(recipe);
    if (index >= 0) {
      this.recipes.splice(index, 1);
    } else {
      console.error(
        'Error while clearing shopping list items, element is not included!'
      );
    }
  }

  /**
   *Replaces ingredients with selected ingredients
   *
   * @param ingredientsForRemoval
   */

  replaceIngredients(ingredientsForRemoval: Ingredient[]) {
    this.ingredients = JSON.parse(JSON.stringify(ingredientsForRemoval));
  }

  /**
   * Clears the list of shopping items
   *
   */

  clearIngredients() {
    this.selectedIngredients = [];
  }
}
