import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  //styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {

  expenses = [];
  selectedExpense;
  confirmDelete = false;
  
  constructor(
              private api: ApiService,
              private _router: Router,
    ) {
    this.getExpenses();
    
  }

  ngOnInit() {
      }

  // Get all expenses
  getExpenses = () => {
    this.api.getAllExpenses().subscribe
    (
      data => {
        this.expenses = data;
      },

      error => {
        console.log(error);
      },
    );
  }

// Delete an expense
deleteExpense = (item) => {
  console.log(item.id)
  this.api.deleteExpense(item.id).subscribe
  (
    data => {
      // this.movies = data;
      // this.movies.push(data);
      this.getExpenses();
    },

    error => {
      console.log(error);
    },
  );
}

// Route to edit
goToEdit(item) {
  console.log(item);
  this._router.navigate(['/edit', item.id]);
}









}
