import { Component } from '@angular/core';

@Component({
  selector: 'app-sec-boxes',
  templateUrl: './sec-boxes.component.html',
  styleUrls: ['./sec-boxes.component.css']
})
export class SecBoxesComponent {
  message: string;

  constructor(){
    this.message = "Alert Message!"
  }

  alert(){
    alert(this.message)
  }
  copied(){
    alert("copied text")
  }
}
