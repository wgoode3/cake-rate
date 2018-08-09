import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllKeiki(){
    return this._http.get('/cake');
  }

  getOneKeiki(_id){
    return this._http.get(`/cake/${_id}`);
  }

  bakeKeiki(keiki){
    return this._http.post('/cake', keiki);
  }

  rateKeiki(_id, review){
    return this._http.post(`/rate/${_id}`, review);
  }

  decorateKeiki(_id, keiki){
    return this._http.put(`/cake/${_id}`, keiki);
  }

  eatKeiki(_id){
    return this._http.delete(`/cake/${_id}`);
  }

}
