import { Component } from '@stencil/core';
declare var google: any;

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  componentDidLoad() {
    this.createPieChart('piechart');
  }
  createPieChart(element) {
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Events', 'Run an event count'],
          ['Politics',     11],
          ['Sports',      2],
          ['Travels',  2]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById(element));

        chart.draw(data, options);
      }
  }
  render() {
    return (
      <div>
        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>
        <div class="chart-wrapper" id="piechart"></div>
        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
