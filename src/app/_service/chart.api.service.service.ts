import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';

// import 'd:/angular_workspace/Ashwin_US/GoogleChartExample/node_modules/rxjs/Rx';

@Injectable()
export class ChartApiServiceService {


  constructor(private http: HttpClient) { }

  getById(id: number): Observable<any> {
    console.log('Searched ID is : ', id);
    const apiUrl = './assets/data/user.json';
      // return this.http.get('./src/asstes/data/user.json' + id);
      return this.http.get(apiUrl);
    //   .map((response: Response) => {
    //     return response.json();
    //   })
    // .catch((error: Response) => {
    //   return Observable.throw('Unable to fetch data') ;
    // });
  }

}
