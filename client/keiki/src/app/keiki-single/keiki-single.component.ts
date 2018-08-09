import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-keiki-single',
  templateUrl: './keiki-single.component.html',
  styleUrls: ['./keiki-single.component.css']
})
export class KeikiSingleComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  singleCake = null
  review = {comment: "", stars: "★★★☆☆", rating: 0};

  ngOnInit() {
  }

  selectACake(_id){
    console.log('cake selected', _id);
    let observable = this._httpService.getOneKeiki(_id);
    observable.subscribe(data => {
      this.singleCake = data["cake"];
    });
  }

  reviewCake(_id){
    console.log(this.review, _id);
    for(let star of this.review.stars){
      if(star === "★"){
        this.review.rating++;
      }
    }
    let observable = this._httpService.rateKeiki(_id, this.review);
    observable.subscribe(data => {
      console.log(data);
      this.selectACake(_id);
      this.review = {comment: "", stars: "★★★☆☆", rating: 0};
    });
  }

}
