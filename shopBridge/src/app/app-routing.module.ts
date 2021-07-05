import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUpdateComponent } from './add-update/add-update.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path:'inventory', component: InventoryComponent},
  {path:'addupdate', component: AddUpdateComponent},
  {path:'addupdate/:id', component: AddUpdateComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
