import { Component, ViewChild } from '@angular/core';
import { KeikiAllComponent } from './keiki-all/keiki-all.component';
import { KeikiSingleComponent } from './keiki-single/keiki-single.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keiki';
 
  @ViewChild('child')
  private child: KeikiAllComponent;

  @ViewChild('child2')
  private child2: KeikiSingleComponent;

  dataFromChild(){
    this.child.getKeiki();
  }

  dataFromCake(eventData){
    this.child2.selectACake(eventData);
  }

}