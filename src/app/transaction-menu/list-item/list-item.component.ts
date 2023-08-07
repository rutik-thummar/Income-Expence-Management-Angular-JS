import { Component , Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { IncomeExpense } from 'src/app/income-expense';
import { IncomeExpenseService } from 'src/app/income-expense.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  constructor(private _service: IncomeExpenseService) { }
  incomeExpenses: IncomeExpense[];
  ngOnInit(): void {
    this._service.getDetails().subscribe(
      data => {
        this.incomeExpenses = data;
      }
    );
  }
      
   
  }