import { Component, Input } from '@angular/core';
import { IncomeExpenseService } from '../income-expense.service';
import { IncomeExpense } from '../income-expense';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-Transaction',
  templateUrl: './Transaction.component.html',
  styleUrls: ['./Transaction.component.css']
})
export class TransactionComponent {

  constructor(private _service: IncomeExpenseService) { }
  ngOnInit(): void {
  }
}
