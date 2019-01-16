import { LoadFavoriteDatasets } from './../datasets/store/dataset.actions';
import { SharedService } from 'src/app/shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../auth/models/user.model.';
import { getUser, getApiUrl } from '../auth/store/auth.selectors';
import { Dataset } from '../datasets/models/dataset.model';
import { getFavoriteDatasets } from '../datasets/store/dataset.selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
 user$: Observable<User>;
 apiUrl$: Observable<string>;
 datasets: Dataset[];
 currentMod = 'show';
  constructor(private store: Store<AppState>, private sharedService: SharedService) {
    this.user$ = store.select(getUser);
    this.apiUrl$ = store.select(getApiUrl);
  }

  ngOnInit() {
   this.getFavoriteDatasets();
  }
  getFavoriteDatasets() {
    this.sharedService.getTableData('api/post/Permission/Datasets/GetFavoriteDatasetList')
    .subscribe(res => this.datasets = res.r);
  // this.store.dispatch(new LoadFavoriteDatasets());
 //  this.datasets$ = this.store.select(getFavoriteDatasets);
 // this.datasets$.subscribe(res => console.log(res));
  }

}
