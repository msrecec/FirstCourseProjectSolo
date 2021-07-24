import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-ingredient-list-edit',
  templateUrl: './ingredient-list-edit.component.html',
  styleUrls: ['./ingredient-list-edit.component.css'],
})
export class IngredientListEditComponent implements OnInit {
  @Input() ingredients?: Ingredient[];
  @Output() removeIngredients = new EventEmitter<Ingredient[]>();
  localIngredients: Ingredient[] = [];

  constructor() {}

  ngOnInit(): void {
    this.localIngredients = JSON.parse(JSON.stringify(this.ingredients));
  }

  /**
   * Adds the ingredient to the selected ingredients
   *
   * @param ingredient newly selected ingredient
   */

  toggleSelected(ingredient: Ingredient) {
    ingredient.selected = !ingredient.selected;
  }

  /**
   * Removes all ingredients from the list
   *
   */

  removeAll() {
    this.localIngredients = [];
    this.removeIngredients.emit(this.localIngredients);
  }

  /**
   * Removes selected ingredient from the list
   *
   */

  removeSelected() {
    this.ingredients?.forEach((ingredient) => {
      if (ingredient.selected) {
        const index = this.ingredients?.indexOf(ingredient) || -1;
        if (index >= 0) {
          this.localIngredients?.splice(index, 1);
        } else {
          console.error(
            'Error while pushing shopping list items, element is already included!'
          );
        }
      }
    });
    this.removeIngredients.emit(this.localIngredients);
  }
}
