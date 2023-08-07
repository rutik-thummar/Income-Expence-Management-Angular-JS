import { HostListener, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TransactionComponent } from './transaction-menu/Transaction.component';
import { EditItemComponent } from './transaction-menu/edit-item/edit-item.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'report', component: MonthlyReportComponent },
  { path: 'Transaction', component:TransactionComponent },
  { path: 'update/:id', component:EditItemComponent }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



