import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  @Input() selectedIngredients?: Ingredient[];

  constructor() {}

  ngOnInit(): void {}

  /**
   * Clears the Shopping list
   *
   */

  clearShoppingList() {
    this.selectedIngredients = [];
  }
}
