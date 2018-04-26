import { Component, OnInit } from '@angular/core';
import { ChartApiServiceService } from '../_service/chart.api.service.service';
import { ActivatedRoute } from '@angular/router';
declare var google: any;
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  userId = '';
  public timelineChartData: any;
  private google;

 constructor(private chartApiServiceService: ChartApiServiceService, private route: ActivatedRoute) {}
  searchUser(id: string) {
    console.log(+id);
    this.chartApiServiceService.getById(+id).subscribe((data) => {
      console.log(data);
      const a = [];
      this.timelineChartData =  {
        chartType: 'Timeline',
        dataTable: []
     };
     const dataTable = new google.visualization.DataTable();
     dataTable.addColumn({ type: 'string', id: 'Name' });
     dataTable.addColumn({ type: 'date', id: 'From' });
     dataTable.addColumn({ type: 'date', id: 'To' });
     data.forEach(element => {
        dataTable.addRow([
            element.Name, new Date(element.C_start_date), new Date(element.C_end_date)
          ]);
      this.timelineChartData.dataTable = dataTable;
    });
 });

}
ngOnInit() {
  this.google = this.route.snapshot.data.google;
}
}
