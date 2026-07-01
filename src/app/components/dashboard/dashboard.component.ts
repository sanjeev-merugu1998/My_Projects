import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from '../charts/charts.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,ChartsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  implements OnInit {

  totalIncome=0;
  totalExpense = 0;
  balance =0;

  constructor(private transactionService: TransactionService){}

  ngOnInit(): void {

    this.transactionService.transaction$.subscribe((t: any[]) => {
      this.totalIncome = t.filter(tx => tx.type?.toLowerCase() === 'income').reduce((sum,tx) => sum+ Number(tx.amount),0);
      this.totalExpense = t.filter(tx => tx.type?.toLowerCase() === 'expense').reduce((sum,tx) => sum+ Number(tx.amount),0);
      this.balance = this.totalIncome-this.totalExpense;
    })
    
  }

}
