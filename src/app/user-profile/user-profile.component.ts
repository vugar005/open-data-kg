import { SharedService } from 'src/app/shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../auth/models/user.model.';
import { getUser, getApiUrl } from '../auth/store/auth.selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
 user$: Observable<User>;
 apiUrl$: Observable<string>;
 datasets: any;
 currentMod = 'show';
  constructor(private store: Store<AppState>, private sharedService: SharedService) {
    this.user$ = store.select(getUser);
    this.user$.subscribe(res => console.log(res));
    this.apiUrl$ = store.select(getApiUrl);
  }

  ngOnInit() {
   // this.mockDatasets = JSON.parse(localStorage.getItem('datasets'));
   this.getFavoriteDatasets();
  }
  getFavoriteDatasets() {
   this.sharedService.getTableData('api/post/Permission/Datasets/GetFavoriteDatasetList')
   .subscribe(res => {
     this.datasets = res;
     console.log(res);
   });
  }

}
