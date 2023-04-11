import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiCallComponent } from './api-call/api-call.component';
import { BindingComponent } from './binding/binding.component';

const routes: Routes = [
  { path: 'api-call', component: ApiCallComponent },
  { path: 'binding', component: BindingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
