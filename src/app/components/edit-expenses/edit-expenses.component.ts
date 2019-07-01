import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-expenses',
  templateUrl: './edit-expenses.component.html',
  //styleUrls: ['./edit-expenses.component.css']
})
export class EditExpensesComponent implements OnInit {
 
  expenses = [];
  selectedExpense;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  // Edit an expense
  editExpense = () => {
  this.api.editExpense(this.selectedExpense).subscribe
  (
    data => {
      // this.movies = data;
      this.expenses.push(data);
      // this.getExpenses();
    },

    error => {
      console.log(error);
    },
  );
}
}
