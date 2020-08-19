import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers: [RecipeService]
})
export class RecepiesComponent implements OnInit {

  selectedRecipe: Recipe

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    )
  }
  onHello(){
    console.log("On hello");
  }

}
