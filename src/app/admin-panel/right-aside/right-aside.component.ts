import { Component, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'right-aside',
  templateUrl: './right-aside.component.html',
  styleUrls: ['./right-aside.component.scss']
})
export class RightAsideComponent {
  @Output() userClicked = new EventEmitter<void>();
  constructor() {
   }

}
