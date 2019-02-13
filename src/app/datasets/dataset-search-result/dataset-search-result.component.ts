import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/shared/shared.service';
import { Component, OnInit } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TypeAheadAdapter } from 'ngx-simple-typeahead';
import { DatasetTypeAheadAdapter } from '../dataset-typeahead.adapter';
@Component({
  selector: 'dataset-search-result',
  templateUrl: './dataset-search-result.component.html',
  styleUrls: ['./dataset-search-result.component.scss']
})
export class DatasetSearchResultComponent implements OnInit {
  faSearch = faSearch;
  inputValue: string;
  datasets$: Observable<any>;
  adapter = new DatasetTypeAheadAdapter(this.http);
  constructor(private router: Router,
    private route: ActivatedRoute,
    private sharedServive: SharedService,
    private http: HttpClient
    ) { }

  ngOnInit() {
   this.route.queryParams.subscribe(res => {
     const query = res['query'] || '';
     this.searchByQuery(query);
   });
  }
  searchByQuery(query: string) {
      const body = {
      kv: {
        datasetFullname: query
      }
    };
   this.datasets$ = this.sharedServive.getTableDataRows('api/get/Permission/Datasets/GlobalSearchForDataset', body );
  }
  handleResultSelected(e: any) {
    const body = {
      kv: {
        datasetFullname: e
      }
    };
    this.sharedServive.getTableDataRows('api/get/Permission/Datasets/GlobalSearchForDataset', body).subscribe(res => console.log(res));
    this.router.navigate(['/datasets/', e.id, 'details']);
  }
  handleShowAll() {
   this.router.navigate(['/datasets/searchResults'], {queryParams: {query: this.inputValue}});
  }
}
