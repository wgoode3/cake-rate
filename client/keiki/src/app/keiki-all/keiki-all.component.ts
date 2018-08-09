import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-keiki-all',
  templateUrl: './keiki-all.component.html',
  styleUrls: ['./keiki-all.component.css']
})
export class KeikiAllComponent implements OnInit {

  cakes = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getKeiki();
  }

  @Output() cakeEvent = new EventEmitter();

  getKeiki(){
    let observable = this._httpService.getAllKeiki();
    observable.subscribe(data => {
      this.cakes = data['cakes'];
    });
  }

  eat(_id){
    console.log("eating", _id);
    let observable = this._httpService.eatKeiki(_id);
    observable.subscribe(data => {
      console.log(data);
      this.selectCake("");
      this.getKeiki();
    });
  }

  selectCake(_id){
    this.cakeEvent.emit(_id);
  }

}
