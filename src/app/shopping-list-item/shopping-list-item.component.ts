import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css'],
})
export class ShoppingListItemComponent implements OnInit {
  @Input() ingredient?: Ingredient;
  @Input() i?: number;

  enumeration: number = 0;
  selected: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (typeof this.i != undefined) {
      this.enumeration = this.i!;
    }
  }

  toggleSelectItem() {
    this.selected = !this.selected;
    console.log('Clicked item');
  }
}