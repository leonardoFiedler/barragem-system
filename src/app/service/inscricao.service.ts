import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class InscricaoService {

  constructor(public http: Http) { }

  public inscrever (email, frequencia) : Observable<any> {
    let options = new RequestOptions();
    return this.http.post('http://192.168.0.3:3000/inscrever', options)
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
