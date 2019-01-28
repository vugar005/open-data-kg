import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DatasetsService {
  datasetFilter$ = new Subject<NgForm>();
constructor() { }

}
