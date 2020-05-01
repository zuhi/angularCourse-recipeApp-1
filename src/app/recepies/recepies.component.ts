import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {

  selectedRecipe: Recipe

  constructor() { }

  ngOnInit(): void {
  }
  onHello(){
    console.log("On hello");
  }

}
