import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, timeout, catchError } from 'rxjs/operators';
import { throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphDataService {

  startDate: Date;
  endDate: Date;

  constructor(
    private _http: HttpClient
  ) { }

  
  setDatesForFilter(start,end){
    this.startDate=start;
    this.endDate=end;
  }
  resetDates(){
    this.startDate=undefined;
    this.endDate=undefined;
  }
  getGraphData() {
    return this._http.get('https://mqrealogytestapp.azurewebsites.net/sample/').pipe(
      retry(3),
      timeout(10000),
      catchError(error => {
        return throwError(error);
      })
    );
  }

}
