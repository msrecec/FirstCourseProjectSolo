import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @Input() ingredients?: Ingredient[];
  @Output() addedIngredients = new EventEmitter<Ingredient[]>();

  selectedIngredients: Ingredient[] = [];

  constructor() {}

  ngOnInit(): void {}

  /**
   * Adds an element to the list of selected ingredients
   *
   * @param ingredient selected ingredient
   */

  addToSelectedIngredients(ingredient: Ingredient) {
    const index = this.selectedIngredients.indexOf(ingredient);
    if (index < 0) {
      this.selectedIngredients.push(ingredient);
    } else {
      console.error(
        'Error while pushing shopping list items, element is already included!'
      );
    }
  }

  /**
   * Add Ingredients to list of selected Ingredients
   *
   */

  addIngredients() {
    this.ingredients?.forEach((i) => {
      if (i.selected) {
        i.selected = false;
        this.addToSelectedIngredients(i);
      }
    });
    const sentIngredients = this.selectedIngredients;
    this.addedIngredients.emit(sentIngredients);
    this.selectedIngredients = [];
  }

  /**
   * Clears the list of selected Ingredients
   *
   */

  clearSelectedIngredients() {
    this.selectedIngredients = [];
    this.ingredients?.forEach((i) => {
      if (i.selected) {
        i.selected = false;
      }
    });
  }
}
