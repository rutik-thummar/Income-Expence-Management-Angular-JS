import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddItemComponent } from './transaction-menu/add-item/add-item.component';
import { BudgetCalculatorComponent } from './transaction-menu/budget-calculator/budget-calculator.component';
import { ListItemComponent } from './transaction-menu/list-item/list-item.component';
import { TransactionComponent } from './transaction-menu/Transaction.component';
import { CardItemComponent } from './transaction-menu/list-item/card-item/card-item.component';
import { EditItemComponent } from './transaction-menu/edit-item/edit-item.component';
import { DatePipe } from '@angular/common';
import { DataTablesModule } from "angular-datatables";




@NgModule({
  declarations: [
    AppComponent,
    MonthlyReportComponent,
    CardItemComponent,
    HomePageComponent,
    ListItemComponent,
    EditItemComponent,
    BudgetCalculatorComponent,
    AddItemComponent,
    TransactionComponent,
  ],
  imports: [AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,
    DataTablesModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
