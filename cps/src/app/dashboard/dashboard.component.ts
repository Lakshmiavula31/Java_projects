import { Component,OnInit } from '@angular/core';

declare var google:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  ngOnInit() {
    this.loadGoogleCharts();
}

loadGoogleCharts() {
    // Load the Visualization API and the corechart package.
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart.bind(this));
}

drawChart() {
    const data = google.visualization.arrayToDataTable([
    ['Class', 'Pass Percentage'],
    ['Class 1', 85],
    ['Class 2', 90],
    ['Class 3', 78],
    ['Class 4', 92],
    ['Class 5', 88],
    ['Class 6', 76],
    ['Class 7', 90],
    ['Class 8', 66],
    ['Class 9', 80],
    ['Class 10', 96],
    ]);

    const options = {
        title: 'School Pass Percentages',
        hAxis: { },
        vAxis: { minValue: 0, maxValue: 100 },
        legend: 'none',
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

}


