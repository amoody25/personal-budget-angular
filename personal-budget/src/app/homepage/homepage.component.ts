import { AfterViewInit, Component } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  public dataSource = {
    datasets: [
        {
            data: [1, 2, 3, 4, 5],
            backgroundColor: [
                '#0048BA',
                '#FFBF00',
                '#008000',
                '#660000',
                '#004225',
                '#58427C',
                '#FF8C00'
        ],
    }
],
labels: [
    'label1',
    'label2'
]
};

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      console.log(res);
      for (let i = 0; i < res.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;
        this.createChart();
      }
    });
  }

  createChart(): void {
    // const ctx = document.getElementById('myChart').getContext('2d');
    const ctx = document.getElementById('myChart');
    const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
    });
}

}
