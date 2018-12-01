import { Component, OnInit } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DatasetsService } from '../datasets.service';
@Component({
  selector: 'app-dataset-search-result',
  templateUrl: './dataset-search-result.component.html',
  styleUrls: ['./dataset-search-result.component.scss']
})
export class DatasetSearchResultComponent implements OnInit {
  faSearch = faSearch;
  inputValue: string;
  datasets$: Observable<any>;
  constructor(private router: Router, private route: ActivatedRoute, private datasetService: DatasetsService) { }

  ngOnInit() {
   this.route.queryParams.subscribe(res => {
     if (res['search']) {
        this.searchByQuery(res['search']);
     }
   });
  }
  searchByQuery(query: string) {
   this.datasets$ = this.datasetService.getDatasetByQuery(query);
  }
  handleResultSelected(e: any) {
    console.log(e);
    if (!e) {
      this.handleShowAll();
     return;
    }
    this.datasetService.getDatasetByQuery(e).subscribe(res => console.log(res));
    this.router.navigate(['/datasets', e.id]);
  }
  handleShowAll() {
   this.router.navigate(['dataset-results'], {queryParams: {search: this.inputValue}});
  }
}
