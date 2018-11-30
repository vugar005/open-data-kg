import { Component, OnInit } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../../shared.service';
import { Dataset } from '../../models/dataset.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dataset-search-result',
  templateUrl: './dataset-search-result.component.html',
  styleUrls: ['./dataset-search-result.component.scss']
})
export class DatasetSearchResultComponent implements OnInit {
  faSearch = faSearch;
  inputValue: string;
  datasets$: Observable<any>;
  constructor(private router: Router, private route: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
   this.route.queryParams.subscribe(res => {
     if (res['search']) {
        this.searchByQuery(res['search']);
     }
   });
  }
  searchByQuery(query: string) {
   this.datasets$ = this.sharedService.getDatasetByQuery(query);
  }
  handleResultSelected(e: any) {
    console.log(e);
    if (!e) {
      this.handleShowAll();
     return;
    }
    this.sharedService.getDatasetByQuery(e).subscribe(res => console.log(res));
    this.router.navigate(['/datasets', e.id]);
  }
  handleShowAll() {
   this.router.navigate(['dataset-results'], {queryParams: {search: this.inputValue}});
  }
}
