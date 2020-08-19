import { Component, OnInit} from '@angular/core';
import { Recipe } from 'src/app/recipe'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  // recipes: Recipe[] = [
  //   new Recipe("A Test Recipe", "This is simple a test", "https://www.stonewallkitchen.com/dw/image/v2/AAYB_PRD/on/demandware.static/-/Sites-swk-catalog/default/dw5152ecc3/R444_grid.jpg?sw=350&sh=350"), 
  //   new Recipe("Second Recipe", "This is my second recipe" ,"https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg"),
  //   new Recipe("Third Recipe", "This is my third recipe" ,"https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg")
  // ];
  

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
     this.recipes = this.recipeService.getRecipes();
    //console.log(this.recipes[0].name);
  }
  // onRecipeSelected(recipe: Recipe){
  //   console.log("Emiiting recipie from list");
  //   console.log(recipe);
  //   this.recipeWasSelected.emit(recipe);
  

  // }
}
