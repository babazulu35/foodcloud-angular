import { HttpErrorResponse } from '@angular/common/http/public_api';

import { IToken } from '../interfaces/authentication';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class AuthenticationService {
  apiUrl:string = environment.api.host;
  constructor(private httpClient:HttpClient) {

   }

   getAccessToken(headers?:HttpHeaders | null){
    let endPoint = "token";
    let body = {
	    "grant_type": "password",
	    "email": "tanjuyayak@gmail.com",
	    "password": "123",
     }
     let options = this.setHeaders(headers);
     this.httpClient.post<IToken>(this.apiUrl + endPoint,body,options).subscribe(result => {
       console.log("Result token");
       
     },(err:HttpErrorResponse) => {
       console.log(err);
     })
   }
  private setHeaders(headers: HttpHeaders | null) {
    headers = headers || new HttpHeaders();
    headers = headers.set('restaurant','http://localhost');
    headers = headers.set('Content-Type','application/json');
    

    return {
      headers:headers
    }
  }

}
