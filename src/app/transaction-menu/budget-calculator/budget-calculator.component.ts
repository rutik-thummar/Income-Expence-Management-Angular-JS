import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IncomeExpenseService } from 'src/app/income-expense.service';
 import * as $ from "jquery";
@Component({
  selector: 'app-budget-calculator',
  templateUrl: './budget-calculator.component.html',
  styleUrls: ['./budget-calculator.component.css'],
})
export class BudgetCalculatorComponent {
  constructor(private _service: IncomeExpenseService) {}

  report: number;
  ngOnInit(): void {
        this._service.getBalanceReport().subscribe((data) => {
      this.report = data;
      if (this.report > 0) {
        $('h4').addClass('green');
      }
    });
  }
}
