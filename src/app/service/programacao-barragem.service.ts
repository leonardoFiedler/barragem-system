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
