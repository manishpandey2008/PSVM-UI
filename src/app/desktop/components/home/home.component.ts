import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { ApiControlService } from 'src/app/service/api-control.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , AfterViewInit{
  // dashboard/labour
  cardData=[
    {title:"Laboure",styleCss:"text-green-900",url:"/dashboard/labour",svgType:"department",totalCount:10},
    {title:"Ownar",styleCss:"text-blue-800",url:"/dashboard/owner",svgType:"employee",totalCount:40},
    {title:"Work List",styleCss:"text-fuchsia-900",url:"/dashboard/work-list",svgType:"file",totalCount:200},
    {title:"Claims",styleCss:"text-green-900",url:"/dashboard/claim",svgType:"file",totalCount:110},
    {title:"Pending Claims",styleCss:"text-green-900",url:"/dashboard/claim",svgType:"file",totalCount:110},
    {title:"Govt. Yojana",styleCss:"text-red-800",url:"/dashboard/govt-yojana",svgType:"file",totalCount:10}
  ]

  chart!: echarts.EChartsType;
  labourCount:any=0;
  ownerCount:any=0;
  centerData:any;

  constructor(private api:ApiControlService) { }

  ngAfterViewInit(): void {
    this.createChart()
  }

  ngOnInit(): void {
    this.getValue()
  }

  getValue(){
    this.api.get("center").subscribe(resp=>{
      this.centerData=resp
      this.cardData[2].totalCount=resp.totalWorkList
      this.cardData[5].totalCount=resp.totalYojana
    })
    this.api.get("api/user/").subscribe(resp=>{
      resp.forEach((e:any)=>{
          e.roles.forEach((role:any)=>{
              if(role.name=="LOBOUR"){this.labourCount+=1}
              if(role.name=="OWNER"){this.ownerCount+=1}
          })
      })
      this.cardData[0].totalCount=this.labourCount
      this.cardData[1].totalCount=this.ownerCount
    })
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


}
