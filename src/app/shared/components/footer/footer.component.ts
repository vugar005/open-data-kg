import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }
  onLatestNavigate() {
    this.sharedService.globalNavState$.next('latest');
  }

}
