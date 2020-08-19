import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static:true}) nameInputRef: ElementRef;
  @ViewChild('amountInput',{static:true}) amountInputRef: ElementRef
  //ingredientAdded = new EventEmitter<{name: string, amount: number}>();  //substitue in below lines..
 // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem() {
    console.log("COming to child add!");
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value);
    //this.ingredientAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
   
  }
}
