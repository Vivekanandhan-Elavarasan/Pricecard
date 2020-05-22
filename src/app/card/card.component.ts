import { Component, OnInit,Input } from '@angular/core';
import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   @Input('cardData')cardData;
   faCheck = faCheck;
   faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
