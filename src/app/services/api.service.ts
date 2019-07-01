import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // url of the backend service
  baseurl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

// THhe expense part

// Getting all expenses
getAllExpenses(): Observable<any> {
  return this.http.get(this.baseurl + '/expenses');

}

// Getting one expense
getOneExpense(id:number): Observable<any>
{
  console.log(id)
  return this.http.get(this.baseurl + '/expenses/' + id + '/');
 
}

// // Updating expenses
editExpense(expense): Observable<any> {
  const body = {
    Desc: expense.Desc,
    Amount: expense.Amount,
    Type: expense.Type,
  };
  // console.log(body);
  return this.http.put(this.baseurl + '/expenses/'
  + expense.id + '/', body);
}

// Adding/Editing an expense
addExpense(expense): Observable<any> {
  console.log(expense);
  const body = {
    Desc: expense.Desc,
    Amount: expense.Amount,
    Type: expense.Type,
  };
  // If the id is 0, add an expense
  console.log(expense.id);
  if (expense.id === -1)  {
    return this.http.post(this.baseurl + '/expenses/', body);
  } else {
    // Edit an expense
    console.log(expense);
    console.log('Works Fine');
    return this.http.put(this.baseurl + '/expenses/'
    + expense.id + '/', body);
  }
}

// Deleting an expense
deleteExpense(id): Observable<any> {
  console.log(id)
  return this.http.delete(this.baseurl + '/expenses/' + id + '/');
}


// The users part




}





