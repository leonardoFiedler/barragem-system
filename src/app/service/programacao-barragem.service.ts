import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class ProgramacaoBarragemService {

  constructor(public http: Http) { }

  public definir (values) : Observable<any>{
    let param:URLSearchParams = new URLSearchParams();
    param.set('values', values);
    return this.http.get('http://localhost:3000/definir', {search : param})
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
    // 'Content-Type': 'application/json', 
    let headers = new Headers({ 'Access-Control-Allow-Origin' : '*' });
    headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    let options = new RequestOptions({ headers: headers });
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
