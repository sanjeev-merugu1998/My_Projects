import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TransactionService } from '../../services/transaction.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css'
})
export class TransactionFormComponent {

  transactForm!: FormGroup;

  constructor(private fb: FormBuilder,private transactionService: TransactionService){
    this.transactForm = this.fb.group({
      type: ['expense',Validators.required],
      amount: [null,[Validators.required,Validators.min(1)]],
      category: ['',Validators.required],
      date:['',Validators.required],
      note:['']
    });
  }



  get amount(){
    return this.transactForm.get('amount');
  }

  get category(){
    return this.transactForm.get('category');
  }

  get date(){
    return this.transactForm.get('date');
  }

  get note(){
    return this.transactForm.get('note');
  }

  onSubmit(){
    if(this.transactForm.valid){
      const newTransaction = {
        id: Date.now(),
        type: this.transactForm.value.type,
        amount: this.transactForm.value.amount,
        category: this.transactForm.value.category,
        date: this.transactForm.value.date,
        note: this.transactForm.value.note || ''
      };

      this.transactionService.addTransaction(newTransaction);
      this.transactForm.reset({
        type: 'expense'
      });
    }
  }

}
