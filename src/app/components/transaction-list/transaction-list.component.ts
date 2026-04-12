import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionService } from '../../services/transaction.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent implements OnInit{

  transaction$!: Observable<any>;

  constructor(private transactionService: TransactionService){}

  ngOnInit(): void {

    this.transaction$ = this.transactionService.transaction$;
    
  }

  deleteTransaction(id: number) {
    this.transactionService.deleteTransaction(id);
  }

}
