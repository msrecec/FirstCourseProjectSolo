import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

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
   * Clears the list of shopping items
   *
   */

  clearIngredients() {
    this.selectedIngredients = [];
  }
}
