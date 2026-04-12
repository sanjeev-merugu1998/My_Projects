import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MATERIAL_MODULES } from './shared/material-imports';
import {TRANSACTION_MODULE } from './shared/transaction-imports';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MATERIAL_MODULES,TRANSACTION_MODULE],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Expense_tracker';
}
