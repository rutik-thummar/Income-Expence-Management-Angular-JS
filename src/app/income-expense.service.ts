import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IncomeExpense } from './income-expense';
import { MonthReport } from './month-report';

@Injectable({
  providedIn: 'root'
})

export class IncomeExpenseService {
  constructor(private httpClient: HttpClient) { }
  private baseURL = "http://localhost:8080"

  addIncomeExpense(incomeExpense: IncomeExpense) {
    return this.httpClient.post(`${this.baseURL}/add`, incomeExpense, { responseType: 'text' as 'json' });
  }
  getDetails(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/list`);
  }
  getBalanceReport(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/getbalancesheet`);
  }
  getMonthlyReport(MonthOrYear: MonthReport): Observable<any> {
    return this.httpClient.post(`${this.baseURL}/get`, MonthOrYear);
  }
  getMonthlyBalance(MonthOrYear: MonthReport) {
    return this.httpClient.post(`${this.baseURL}/getmonthlybalance`, MonthOrYear, { responseType: 'text' as 'json' });
  }
  editStudent(incomeExpense: IncomeExpense) {
    return this.httpClient.put(`${this.baseURL}/update`, incomeExpense, { responseType: 'text' as 'json' });
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${id}`, { responseType: 'text' });
  }

  deleteStudentById(id: Number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/deleteById/${id}`, { responseType: 'text' });
  }
}
