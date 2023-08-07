import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IncomeExpense } from 'src/app/income-expense';
import { IncomeExpenseService } from 'src/app/income-expense.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent {
  incomeExpense: IncomeExpense = new IncomeExpense();
  date = new Date();
  currentmonth = this.date.getUTCMonth() + 1;
  currentdate = this.date.getUTCDay() - 1;
  FinalMonth: any;
  FinalDay: any;
  constructor(private _service: IncomeExpenseService) { }

  ngOnInit(): void {
    if (this.currentmonth < 10) {
      this.FinalMonth = "0" + this.currentmonth;
    } else {
      this.FinalMonth = this.currentmonth;
    }
    if (this.currentdate < 10) {
      this.FinalDay = "0" + this.currentdate;
    } else {
      this.FinalDay = this.currentdate;
    }
    this.incomeExpense.trasDate = this.date.getUTCFullYear() + "-" + this.FinalMonth + "-" + this.FinalDay;
  }

  addDetail() {
    if (this.incomeExpense.trasDate == null ||this.incomeExpense.trasDate == '' || this.incomeExpense.amount == null || this.incomeExpense.name == null) {
      Swal.fire('Please enter valid details.')
      return;
    }
    this._service.addIncomeExpense(this.incomeExpense).subscribe((data) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your Record has been saved',
        showConfirmButton: false,
        timer: 1500,
      }).then(e => {
        window.location.reload();
      });
    });
  }
}
