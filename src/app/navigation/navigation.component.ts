import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  @Input() ingredients?: Ingredient[];
  selectedIngredients: Ingredient[] = [];

  constructor() {}

  ngOnInit(): void {}

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
