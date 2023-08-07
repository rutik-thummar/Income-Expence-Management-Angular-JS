import { Component, OnInit } from '@angular/core';
import { IncomeExpense } from '../income-expense';
import { IncomeExpenseService } from '../income-expense.service';
import { MonthReport } from '../month-report';
@Component({
  selector: 'app-monthly-report',
  templateUrl: './monthly-report.component.html',
  styleUrls: ['./monthly-report.component.css'],
})
export class MonthlyReportComponent implements OnInit {
  monthyear: MonthReport = new MonthReport();
  constructor(private _service: IncomeExpenseService) { }
  currentMonth = new Date().getUTCMonth() + 1;
  finalMonth: any;
  balanceSheet: any;
  showdiv: boolean = false;
  incomeExpenses: IncomeExpense[];

  ngOnInit(): void {
    this.monthyear.type = 'all';
    if (this.currentMonth < 10) {
      this.finalMonth = '0' + this.currentMonth;
    } else {
      this.finalMonth = this.currentMonth;
    }
    this.monthyear.month = new Date().getUTCFullYear() + '-' + this.finalMonth;
  }

  getBalanceSheetStyle() {
    return {
      'color': this.balanceSheet >= 0 ? 'green' : 'red'
    };
  }

  getRecord() {
    this._service.getMonthlyReport(this.monthyear).subscribe((data) => {
      this.incomeExpenses = data;
      if (this.incomeExpenses.length == 0) {
        this.showdiv = false;
      }else{
        this.showdiv = true;
      }
    }),
      this._service.getMonthlyBalance(this.monthyear).subscribe((data) => {
        this.balanceSheet = data;
       
      });
  }
}
