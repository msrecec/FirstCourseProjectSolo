import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  @Input() ingredients?: Ingredient[];

  selectedIngredients: Ingredient[] = [];

  constructor() {}

  ngOnInit(): void {}
}
