import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaesmeraldaserviceService {

  constructor(private http: HttpClient) { }

  getQuery(body:any, termino:String, flag:Number, token?:string){
    const url=`http://localhost:3000/${termino}`;
    const headers = new HttpHeaders({
      'Authorization':token
    });
    switch(flag){
      case 1:
        return this.http.post(url,body);
      break;
      case 2:
        return this.http.get(url);
      break;
      case 3:
        return this.http.post(url,body, {headers});
      break;
      case 4:
        return this.http.put(url,body, {headers});
      break;
      case 5:
        return this.http.put(url,body);
      break;
      case 6:
        return this.http.get(url,{headers});
      break;
    }
  }

}


