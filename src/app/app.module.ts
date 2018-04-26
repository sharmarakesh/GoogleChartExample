import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartApiServiceService } from './_service/chart.api.service.service';
import { ChartComponent } from './chart/chart.component';
import { Routes, RouterModule } from '@angular/router';
import { GoogleChartResolver } from './_service/google.chart.resolver';

const appRoutes: Routes = [{path: '', component: ChartComponent, resolve: {google: GoogleChartResolver}}];
@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    Ng2GoogleChartsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ChartApiServiceService, GoogleChartResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
