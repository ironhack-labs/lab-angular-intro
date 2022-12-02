import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  

  
  onClick(){
    alert('You have clicked the button');
  }
 onCopy(){
  console.log('dont')
  alert('Dont copy me!')
 }
}
