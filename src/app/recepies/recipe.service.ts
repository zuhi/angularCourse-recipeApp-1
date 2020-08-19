import { Recipe } from '../recipe';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';

export class RecipeService {
   recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe(
         "A Test Recipe", 
         "This is simple a test", 
         "https://www.stonewallkitchen.com/dw/image/v2/AAYB_PRD/on/demandware.static/-/Sites-swk-catalog/default/dw5152ecc3/R444_grid.jpg?sw=350&sh=350",
         [
            new Ingredient('Meat', 16),
            new Ingredient('French Fries', 2)

         ]), 
        new Recipe(
           "Second Recipe", 
           "This is my second recipe" ,
           "https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg",
           []),
        new Recipe(
           "Third Recipe", 
           "This is my third recipe" ,
           "https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg",
           [
            new Ingredient('Buns', 10),
            new Ingredient('White sauce', 2)
           ])
      ];
       
   getRecipes() {
       //by doin slice() we just get the copy of the recipe array
       return this.recipes.slice();
   }
}