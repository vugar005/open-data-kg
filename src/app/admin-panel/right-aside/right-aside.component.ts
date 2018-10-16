import { Component} from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'right-aside',
  templateUrl: './right-aside.component.html',
  styleUrls: ['./right-aside.component.scss']
})
export class RightAsideComponent {
 faUser = faUser;
 faBell = faBell;
  constructor() {
   }

}
