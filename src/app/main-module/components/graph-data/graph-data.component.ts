import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GraphDataService } from '../../../services/graph-data.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-graph-data',
  templateUrl: './graph-data.component.html',
  styleUrls: ['./graph-data.component.scss']
})
export class GraphDataComponent implements OnInit {
  graphData:any=[];
  startDate: Date;
  endDate: Date;
  chartLabels: Label[] = [];

  chartData: ChartDataSets[] = [
    {
      label:"Data",
      data:[]
    }
  ];
  
  chartOption: ChartOptions = {};
  
  constructor(
    private _graphService: GraphDataService,
    public datepipe: DatePipe
  ) {
    this.getGraphData();
  }
  
  ngOnInit(): void {
    this.startDate=this._graphService.startDate;
    this.endDate=this._graphService.endDate;
  }

  getGraphData(){
    this._graphService.getGraphData().subscribe((response:any) => {
      this.graphData = response;
      if(this._graphService.startDate && this._graphService.endDate){
        this.filterAcctToDate(this._graphService.startDate, this._graphService.endDate);
      }
      this.reformatData();
    },
    error => {
      alert("Something went wrong");
    })
  }

  reformatData(){
    this.chartData[0].data=[];
    this.chartLabels=[];
    this.graphData.forEach(element => {
      this.chartLabels.push(this.datepipe.transform(element.date, 'dd-MM-yyyy'));
      this.chartData[0].data.push(element.value);
    });
  }

  filterAcctToDate(start, end){
    var startDate = new Date(start);
    var endDate = new Date(end);
    
    var filteredData = this.graphData.filter(element => {
        var hitDates = element.date || new Date;
        hitDates = new Date(hitDates);
        return hitDates >= startDate && hitDates <= endDate;
    });
    this.graphData=filteredData;
  }

  setDates(){
    this._graphService.setDatesForFilter(this.startDate, this.endDate);
    this.getGraphData();
  }
}
