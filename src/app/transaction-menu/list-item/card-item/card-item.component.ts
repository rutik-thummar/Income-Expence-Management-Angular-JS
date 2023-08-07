import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IncomeExpense } from 'src/app/income-expense';
import { IncomeExpenseService } from 'src/app/income-expense.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent {
  constructor(private _service: IncomeExpenseService, private route: Router) { }
  @Input() item: IncomeExpense;
  ngOnInit(): void {
  }

  deleteRecord(id: Number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this._service.deleteStudentById(id).subscribe();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Record has been deleted.',
          showConfirmButton: false,
          timer: 1500,
        }).then(e => {
          window.location.reload();
        });
      }
    });
  }

  onCardClick(id: Number) {
    this.route.navigate(['/update', id]);
  }
}
