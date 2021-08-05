import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './components/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe/recipe-item/recipe-item.component';
import { FormsModule } from '@angular/forms';
import { ShoppingListItemComponent } from './components/shopping/shopping-list-item/shopping-list-item.component';
import { IngredientFormComponent } from './components/ingredient/ingredient-form/ingredient-form.component';
import { IngredientListEditComponent } from './components/ingredient/ingredient-list-edit/ingredient-list-edit.component';
import { IngredientItemComponent } from './components/ingredient/ingredient-item/ingredient-item.component';
import { RecipeFormComponent } from './components/recipe/recipe-form/recipe-form.component';
import { IngredientsService } from './services/ingredients-service/ingredients.service';
import { ShoppingListService } from './services/shopping-list-service/shopping-list.service';
import { RecipeService } from './services/recipe-service/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListItemComponent,
    IngredientFormComponent,
    IngredientListEditComponent,
    IngredientItemComponent,
    RecipeFormComponent,
  ],
  imports: [BrowserModule, NgbModule, FormsModule],
  providers: [IngredientsService, ShoppingListService, RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
