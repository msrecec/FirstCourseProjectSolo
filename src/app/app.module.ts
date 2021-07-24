import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { FormsModule } from '@angular/forms';
import { ShoppingListItemComponent } from './shopping-list-item/shopping-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListItemComponent,
  ],
  imports: [BrowserModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
