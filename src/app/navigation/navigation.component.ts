import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  @Input() ingredients?: Ingredient[];

  constructor() {}

  ngOnInit(): void {}
}
