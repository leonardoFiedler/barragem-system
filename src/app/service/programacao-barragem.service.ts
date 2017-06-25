import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class ProgramacaoBarragemService {

  constructor(public http: Http) { }

  public definir (values) : Observable<any>{
    var contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/json');
    contentHeaders.append('Content-Type', 'application/json');
    let body = JSON.stringify({values});
    return this.http.post('http://localhost:3000/definir', body, { headers: contentHeaders })
      .map(
        response => {
          return response.json();
        },
        error => {
          return error;
        }
      );
  }

  public obter () : Observable<any>{
    let options = new RequestOptions();
    return this.http.get('http://localhost:3000/receber-valores', options)
      .map(
        response => {
          return response.json();
        },
        error => {
          return error;
        }
      );
  }
}
