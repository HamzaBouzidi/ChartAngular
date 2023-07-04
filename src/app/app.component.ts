import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Chart } from 'chart.js/auto';
  import { NgSelectModule, NgSelectConfig } from '@ng-select/ng-select';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


  names: string[];
  constructor(public dataService: DataService, private config: NgSelectConfig) {
    this.names = dataService.names;

    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }


  public Chart: any;

  selectedOptions: string[] = [];

  createChart() {
    this.Chart = new Chart('MyChart', {
      type: 'bar',

      data: {
        labels: [
          "Prend l'ascendant sur les autres",
          'Cherche \u00e0 convaincre les autres',
          'Va spontan\u00e9ment vers les autres',
          "S'implique affectivement",
          "S'ouvre aux id\u00e9es des autres",
          'Accepte les critiques \u00e9mises',
          'Consulte avant de d\u00e9cider',
          'Est attir\u00e9 par les t\u00e2ches vari\u00e9es',
          "S'int\u00e9resse aux choses abstraites",
          "Fait preuve d'inventivit\u00e9",
          "S'adapte aux changements",
          "S'organise avec m\u00e9thode",
          'Pers\u00e9v\u00e8re face aux obstacles',
          'Va au del\u00e0 des t\u00e2ches prescrites',
          "S'attache aux d\u00e9tails",
          'Se montre d\u00e9tendu',
          "S'attache aux aspects positifs",
          'Contr\u00f4le ses \u00e9motions',
          'Recherche la stabilit\u00e9',
        ],
        datasets: [
          {
            label: 'Critere',
            data: [],
            backgroundColor: 'blue',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }

  updateChartData() {
       const selectedNames = this.selectedOptions;
       const colors = ['blue', 'green', 'red', 'yellow'];

       const datasets = selectedNames.map((name,index) => {
         const selectedData = this.dataService.data.find((item) => item[name]);
         const dataValues = Object.values(selectedData[name]);

         return {
           label: name,
           data: dataValues,
           //backgroundColor: 'blue',
           backgroundColor: colors[index % colors.length],
         };
       });

       this.Chart.data.datasets = datasets;
       this.Chart.update();
  }

  ngOnInit(): void {
    this.createChart();
  }
}
