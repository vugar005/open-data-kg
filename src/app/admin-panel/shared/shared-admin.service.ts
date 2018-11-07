import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';

@Injectable()
export class SharedAdminService {
  constructor(private http: HttpClient) {}

}
