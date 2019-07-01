import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  //styleUrls: ['./add-expenses.component.css']
})
export class AddExpensesComponent implements OnInit {

  expenses = [];
  selectedExpense;
  panelTitle: string;

  @ViewChild('addExpenseForm', {static:true}) public addExpenseForm: NgForm;

  constructor(private api: ApiService,
              private _router: Router,
              private _route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this._route.paramMap.subscribe(
      parameterMap => {
        const id = +parameterMap.get('id');
        this.getExpense(id);
      });
  }

  private getExpense(id: number) {
    if (id === 0) {
      this.selectedExpense = {
        id: -1,
        Desc: '',
        Amount: '',
        Type: '',
      };
      this.addExpenseForm.reset();
      this.panelTitle = 'Add Expense Here'
    } else {
      this.panelTitle = 'Edit your Expense'
      this.selectedExpense = this.api.getOneExpense(id).subscribe
      (
        data => {
         this.selectedExpense = data;
        },

        error => {
          console.log(error);
        },
      );
    }
  }

  addExpense = () => {
    this.api.addExpense(this.selectedExpense).subscribe
    (
      data => {
        // this.movies = data;
        console.log(this.selectedExpense.id)
        this.expenses.push(data);
        this.addExpenseForm.reset();  //Resets the form after submit
        this._router.navigate(['/expenses']);
      },

      error => {
        console.log(error);
      },
    );
  }
}
