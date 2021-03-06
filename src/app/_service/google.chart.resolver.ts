// shared/google-chart.resolver.ts
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
declare const google: any;

@Injectable()
export class GoogleChartResolver implements Resolve<any> {

  private static googleChartLoaded = false;
  constructor() {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (GoogleChartResolver.googleChartLoaded) {
      return Observable.of(google);
    } else {
      return Observable.create(function (observer: Observer<any>) {

        google.charts.load('current', {packages: ['corechart', 'bar']});
        google.charts.setOnLoadCallback(() => {
          observer.next(google);
          observer.complete();
          GoogleChartResolver.googleChartLoaded = true;
        });
      });
    }
  }
}
