import { Component } from '@angular/core';
import { Ingredient } from './models/ingredient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ingredients: Ingredient[] = [
    new Ingredient('pork', false),
    new Ingredient('carrot', true),
    new Ingredient('chicken', true),
    new Ingredient('potato', true),
    new Ingredient('rice', true),
    new Ingredient('pork fat', false),
    new Ingredient('eggs', true),
  ];

  constructor() {}

  ngOnInit(): void {}
}
