import { HttpClient } from '@angular/common/http';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { MatDialog } from '@angular/material';
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
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
 user: User;
 apiUrl$: Observable<string>;
 datasets: Dataset[];
 currentMod = 'show';
  constructor(private store: Store<AppState>, private sharedService: SharedService, private http: HttpClient,
    private dialog: MatDialog
    ) {
  store.select(getUser).pipe(take(1)).subscribe(res => this.user = res);
    this.apiUrl$ = store.select(getApiUrl);
  }

  ngOnInit() {
    this.http.post('api/post/user/check', {}).subscribe(res => console.log(res));

   this.getFavoriteDatasets();
  }
  getFavoriteDatasets() {
    this.sharedService.getTableData('api/post/Permission/Datasets/GetFavoriteDatasetList')
    .subscribe(res => this.datasets = res.r);
  // this.store.dispatch(new LoadFavoriteDatasets());
 //  this.datasets$ = this.store.select(getFavoriteDatasets);
 // this.datasets$.subscribe(res => console.log(res));
  }
  onEdit() {
    console.log(this.user)
   this.dialog.open(UserProfileEditComponent, {data: { user: this.user} });
  }

}
