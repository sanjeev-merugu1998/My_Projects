import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService{

    

  constructor() { 
    const saved = localStorage.getItem('transactions');
    if(saved){
      this.transactions = JSON.parse(saved);
      this.transactionSubject.next([...this.transactions]);
    }
  }

  private transactionSubject = new BehaviorSubject<any[]>([]);
  transaction$ = this.transactionSubject.asObservable();

  private transactions: any[] =[];

  addTransaction(transaction: any){
    this.transactions.push(transaction);
    this.transactionSubject.next([...this.transactions]);
    this.updateState();
  }

  deleteTransaction(id: number) {
  this.transactions = this.transactions.filter(tx => tx.id !== id);
  this.transactionSubject.next([...this.transactions]);
  this.updateState();
}

  getTransaction(){
    return this.transactionSubject.value;
  }

  private updateState(){
    localStorage.setItem('transactions',JSON.stringify(this.transactions));
  }

}
