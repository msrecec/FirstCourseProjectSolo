import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnInit {
  @Input() ingredients?: Ingredient[];
  @Output() addRecipe = new EventEmitter<Recipe>();
  copiedIngredients: Ingredient[] = [];
  selectedIngredients: Ingredient[] = [];

  name?: string;

  constructor() {}

  toggleIngredient(ingredient: Ingredient) {
    ingredient.selected = !ingredient.selected;
  }

  ngOnInit(): void {
    this.copiedIngredients = JSON.parse(JSON.stringify(this.ingredients));
  }

  toggle(ingredient: Ingredient) {
    ingredient.selected = !ingredient.selected;
  }

  /**
   * Adding new recipe and emitts the event
   *
   */

  addRecipeItem() {
    if (typeof this.name == 'string') {
      this.copiedIngredients.forEach((i) => {
        if (i.selected) {
          i.selected = false;
          this.selectedIngredients.push(i);
        }
      });
      this.selectedIngredients = JSON.parse(
        JSON.stringify(this.selectedIngredients)
      );
      const recipe = new Recipe(this.name, this.selectedIngredients);
      this.addRecipe.emit(recipe);
      this.selectedIngredients = [];
      this.name = '';
    } else {
      console.error('Error while adding the recipe.');
    }
  }

  /**
   * Clears recipe items
   *
   */

  clearRecipeItem() {
    this.name = '';
    this.copiedIngredients.forEach((i) => {
      i.selected = false;
    });
    this.selectedIngredients = [];
  }
}
