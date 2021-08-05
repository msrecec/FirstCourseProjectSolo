import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css'],
})
export class IngredientFormComponent implements OnInit {
  @Output() addedNewIngredient = new EventEmitter<Ingredient>();
  name: string = '';
  halal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  clearIngredient() {
    this.name = '';
    this.halal = false;
  }

  /**
   * Emitts new Ingredient
   *
   */

  addIngredient() {
    this.addedNewIngredient.emit(new Ingredient(this.name, this.halal));
  }
}
