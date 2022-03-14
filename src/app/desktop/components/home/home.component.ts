import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , AfterViewInit{

  cardData=[
    {title:"Laboure",styleCss:"text-green-900",url:"/department",svgType:"department",totalCount:10},
    {title:"Ownar",styleCss:"text-blue-800",url:"/employee",svgType:"employee",totalCount:40},
    {title:"Work List",styleCss:"text-fuchsia-900",url:"/file",svgType:"file",totalCount:200},
    {title:"Claims",styleCss:"text-green-900",url:"/file",svgType:"file",totalCount:110},
    {title:"Pending Claims",styleCss:"text-green-900",url:"/file",svgType:"file",totalCount:110},
    {title:"Govt. Yojana",styleCss:"text-red-800",url:"/file",svgType:"file",totalCount:10}
  ]

  chart!: echarts.EChartsType;

  constructor() { }

  ngAfterViewInit(): void {
    this.createChart()
  }

  ngOnInit(): void {
  }

  option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Web data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'PSVM',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' ,color:""},
          { value: 735, name: 'Direct',color:"" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  createChart(){
    this.option.title.text="Labour Owner chart"
    this.option.series[0].data=[
      { value: 1048, name: 'Labour',color:""},
      { value: 100, name: 'Owner',color:"" },
    ]
    let main: HTMLDivElement = <HTMLDivElement>document.getElementById('chart');
    this.chart = echarts.init(main);
    this.chart.setOption(this.option);
    this.chart.resize();


    this.option.title.text="Active labour chart"
    this.option.series[0].data=[
      { value: 1000, name: 'Job finded',color:'' },
      { value: 75, name: 'Wait for job',color:'#C70039' },
    ]
    let main1: HTMLDivElement = <HTMLDivElement>document.getElementById('chart1');
    this.chart = echarts.init(main1);
    this.chart.setOption(this.option);
    this.chart.resize();
  }

  getValue(){

  }
}
