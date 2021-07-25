import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnInit {
  @Input() ingredients?: Ingredient[];
  @Output() addRecipe = new EventEmitter<Recipe>();
  selectedIngredients: Ingredient[] = [];

  name?: string;

  constructor() {}

  toggleIngredient(ingredient: Ingredient) {
    ingredient.selected = !ingredient.selected;
  }

  ngOnInit(): void {}
}
