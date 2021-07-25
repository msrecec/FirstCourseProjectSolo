import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Input() recipes?: Recipe[];
  @Output() clearItem = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  /**
   * Emitts clearing of recipe item
   *
   * @param recipe clears recipe item
   */

  clear(recipe: Recipe) {
    this.clearItem.emit(recipe);
  }
}
