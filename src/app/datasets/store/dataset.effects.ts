import {HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, mergeMap, tap } from 'rxjs/operators';
import { SharedService } from 'src/app/shared/shared.service';
import { DatasetsActionTypes } from './dataset.actions';

@Injectable()
export class DatasetEffects {

  @Effect()
  getFavoriteDatasets = this.actions$
  .pipe(
    ofType(DatasetsActionTypes.LOAD_FAVOURITE_DATASETS ),
    tap(res => console.log(res)),
    switchMap((res: any) =>
     this.sharedService.getTableData('api/post/Permission/Datasets/GetFavoriteDatasetList')
     ),
     mergeMap((res: any) => {
       return [{
         type: DatasetsActionTypes.SET_FAVOURITE_DATEASETS,
         payload: res
       }
      ];
     })
  );
  constructor(
    private actions$: Actions,
    private sharedService: SharedService
     ) {}
    }
