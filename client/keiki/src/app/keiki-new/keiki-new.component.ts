import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-keiki-new',
  templateUrl: './keiki-new.component.html',
  styleUrls: ['./keiki-new.component.css']
})
export class KeikiNewComponent implements OnInit {

  newCake = {baker: "", image: ""};

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  @Output() getNewCakes = new EventEmitter();

  bakeCake(img){
    this.newCake.image = img;
    let observable = this._httpService.bakeKeiki(this.newCake);
    observable.subscribe(data => {
      console.log(data);
      this.getNewCakes.emit();
      this.newCake = {baker: "", image: ""};
    });
  }

}
