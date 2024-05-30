import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelevisorListComponent } from './televisor-list/televisor-list.component';

const routes: Routes = [
  { path: 'televisores', component: TelevisorListComponent },
  { path: '', redirectTo: '/televisores', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
