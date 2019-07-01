import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { ApiService } from './services/api.service';
import { EditExpensesComponent } from './components/edit-expenses/edit-expenses.component';
import { AddExpensesCanDeactivateGuard } from './components/add-expenses/add-expenses-can-deactivate-guard.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
// import { AddExpensesComponent } from './components/add-expenses/add-expenses.component';


@NgModule({
  declarations: [
    AppComponent,
    // ExpensesListComponent,
    // AddExpensesComponent
    routingComponents,
    EditExpensesComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ApiService, AddExpensesCanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
