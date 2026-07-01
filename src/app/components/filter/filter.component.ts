import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  @Output() filterChanged = new EventEmitter<any>();

  constructor(private fb: FormBuilder){}

  categories: string[] = ['Food','Travel','Rent','Salary','Shopping','Bills'];

  filterForm = this.fb.group({
    type:[''],
    category:[''],
    startDate:[''],
    endDate:['']
  });

  applyFilter(){
    this.filterChanged.emit(this.filterForm.value);
  }

  resetFilter(){
    this.filterForm.reset({
      type:'',
      category:'',
      startDate:'',
      endDate:''
    });

    this.filterChanged.emit(this.filterForm.value);
  }

}
