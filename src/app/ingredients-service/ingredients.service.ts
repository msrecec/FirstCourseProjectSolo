import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

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

  constructor() {}
}
