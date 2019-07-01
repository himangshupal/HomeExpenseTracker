import { CanDeactivate } from '@angular/router';
import { AddExpensesComponent } from './add-expenses.component';
import { Injectable } from '@angular/core';

@Injectable()
export class AddExpensesCanDeactivateGuard implements CanDeactivate<AddExpensesComponent> {
    canDeactivate(component: AddExpensesComponent): boolean {
        if(component.addExpenseForm.dirty) {
            return confirm(' Are you sure you wanna dsicard changes?');
        }

        return true;
    }
}