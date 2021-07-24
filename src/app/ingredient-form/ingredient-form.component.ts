import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css'],
})
export class IngredientFormComponent implements OnInit {
  name: string = '';
  halal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  clearIngredient() {
    this.name = '';
    this.halal = false;
  }

  addIngredient() {}
}
