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

  constructor() {}

  ngOnInit(): void {
    if (typeof this.i != undefined) {
      this.enumeration = this.i!;
    }
  }

  /**
   * Toggles selected item
   *
   */

  toggleSelectItem() {
    if (typeof this.ingredient !== undefined) {
      this.ingredient!.selected = !this.ingredient!.selected;
    } else {
      console.error(
        'Error while calling toggleSelectItem(): ingredient is undefined!'
      );
    }
  }
}
