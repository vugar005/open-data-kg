import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {  Category } from 'src/app/datasets/models/category.model';
import { DatasetsService } from 'src/app/datasets/datasets.service';
import { SharedService } from 'src/app/shared/shared.service';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'category-overview',
  templateUrl: './category-overview.component.html',
  styleUrls: ['./category-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryOverviewComponent implements OnInit, AfterViewInit {
  faSearch = faSearch;
  categories: Category[];
  constructor(private router: Router, private datasetService: DatasetsService, private sharedService: SharedService,
     private changeRef: ChangeDetectorRef) { }

  ngOnInit() {
  this.getCategories();
  }
  getCategories() {
    this.datasetService.getCategories()
    .subscribe(res => {
      this.categories = res;
      this.replaceImgWithSvg();
      this.changeRef.detectChanges();
    });
  }
  onNavigate(id: string) {
      this.router.navigate([`/home/datasets/by-category/${id}`]);
  }
  replaceImgWithSvg() {
    setTimeout(() => {
      console.log('replace---')
    this.sharedService.replaceSvgWitInline();
    }, 2000);
  }
  ngAfterViewInit() {
    if (this.categories) {
    this.replaceImgWithSvg();
    }
  }

}
