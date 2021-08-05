import { Injectable } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  private ingredients: Ingredient[] = [
    new Ingredient('pork', false),
    new Ingredient('carrot', true),
    new Ingredient('chicken', true),
    new Ingredient('potato', true),
    new Ingredient('rice', true),
    new Ingredient('pork fat', false),
    new Ingredient('eggs', true),
  ];

  public getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  /**
   * Compares the two ingredients
   *
   * @param ingredient1
   * @param ingredient2
   * @returns true if the ingredients are equal
   */

  private compareIngredients(
    ingredient1: Ingredient,
    ingredient2: Ingredient
  ): boolean {
    return (
      ingredient1.name.localeCompare(ingredient2.name) === 0 &&
      ingredient1.halal === ingredient2.halal
    );
  }

  public addIngredient(ingredient: Ingredient): void {
    let cmp = false;
    this.ingredients.forEach((i) => {
      if (this.compareIngredients(i, ingredient)) {
        cmp = true;
      }
    });
    if (cmp) {
      alert('This ingredient was already added to the list');
    } else {
      this.ingredients.push(ingredient);
    }
  }

  constructor() {}
}
