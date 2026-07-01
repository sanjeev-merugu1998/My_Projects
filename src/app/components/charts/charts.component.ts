import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild,ElementRef } from '@angular/core';
import { Chart,registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent implements OnChanges, AfterViewInit {

  @Input() totalIncome: number = 0;
  @Input() totalExpense: number =0;

  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>

  chart: any;
  viewInitialized = false;

  ngAfterViewInit(): void {
    this.viewInitialized = true;
    this.createChart();
  }
  

  ngOnChanges(changes: SimpleChanges): void {
    if(this.viewInitialized){
    this.createChart();
    }
  }

  createChart() {

    // const canvas = document.getElementById('myChart') as HTMLCanvasElement;

    if(!this.chartCanvas) return;

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Income', 'Expense'],
        datasets: [
          {
            data: [this.totalIncome, this.totalExpense],
            backgroundColor: ['#4CAF50', '#F44336']
          }
        ]
      },
      options: {
        responsive: true
      }
    });
  }

}
