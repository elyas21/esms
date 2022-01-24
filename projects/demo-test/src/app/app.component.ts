import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-test';
  Selectedweek =0;
  onSubmit(){
    console.log('ok');
    
  }
  setSelectedweek(){
    console.log(this.setSelectedweek);
    
    this.Selectedweek = 1
  }
}
