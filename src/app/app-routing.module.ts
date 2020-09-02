import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecepiesComponent } from './recepies/recepies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recepies/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recepies/recipe-detail/recipe-detail.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecepiesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: ':id', component: RecipeDetailComponent}

  ]},
  { path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
