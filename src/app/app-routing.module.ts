import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { AddExpensesComponent } from './components/add-expenses/add-expenses.component';
import { EditExpensesComponent } from './components/edit-expenses/edit-expenses.component';
import { AddExpensesCanDeactivateGuard } from './components/add-expenses/add-expenses-can-deactivate-guard.service';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  // List/delete expenses
  {path: 'expenses', component: ExpensesListComponent},
  // {path: 'expenses/:id', component: EditExpensesComponent},
  // {
  //   path: 'add',
  //   component: AddExpensesComponent,
  //   canDeactivate: [AddExpensesCanDeactivateGuard],
  // },

  // Add/edit expenses
  {
    path: 'edit/:id',
    component: AddExpensesComponent,
    canDeactivate: [AddExpensesCanDeactivateGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  ExpensesListComponent,
  AddExpensesComponent,
  EditExpensesComponent,
];