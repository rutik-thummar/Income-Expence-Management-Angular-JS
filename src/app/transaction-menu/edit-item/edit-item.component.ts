import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IncomeExpense } from 'src/app/income-expense';
import { IncomeExpenseService } from 'src/app/income-expense.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
})
export class EditItemComponent {
  isNewItem: boolean;
  @Input() item: IncomeExpense;
  incomeExpense: IncomeExpense = new IncomeExpense();
  selectedDate: any = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
  constructor(
    private _route: Router,
    private _service: IncomeExpenseService,
    private datePipe: DatePipe,
    private _activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this._activedRoute.snapshot.params['id'];
    this._service.getById(id).subscribe((data) => {
      this.incomeExpense = data;
      this.incomeExpense = JSON.parse(data);
    });
    if (!this.item) {
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
    }
  }
  updateRecord() {   
    if (this.incomeExpense.trasDate == null ||this.incomeExpense.trasDate == ''|| this.incomeExpense.amount == null || this.incomeExpense.name == '') {
      Swal.fire('Please enter valid details.')
      return;
    }
    this._service.editStudent(this.incomeExpense).subscribe(
      data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Record has been updated!',
          showConfirmButton: false,
          timer: 1500
        })
        this._route.navigate(['Transaction']);
      })
  }

  cancel() {
    this._route.navigate(['/Transaction']);
  }
}
