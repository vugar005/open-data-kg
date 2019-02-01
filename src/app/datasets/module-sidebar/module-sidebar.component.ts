import { Organization } from 'src/app/datasets/models/organization.model';
import { Component, OnInit, Output, EventEmitter, Input, HostBinding, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { DatasetsService } from '../datasets.service';
import { Category } from '../models/category.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'module-sidebar',
  templateUrl: './module-sidebar.component.html',
  styleUrls: ['./module-sidebar.component.scss'],
  animations: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn, {params: {timing: 0.5, delay: 0}}))])]
})
export class ModuleSidebarComponent implements OnInit, AfterViewInit {
  @Input() type: string;
  @Output() datasetGroups = new EventEmitter();
  @Output() selected = new EventEmitter();
  @HostBinding('@fadeIn')
  itemList: Category[] | Organization[];
  orgIds: string[] = [];
  ready = false;
  selectedIndex: string;
  loadedImgCount = 0;
 constructor(private route: ActivatedRoute, private datasetService: DatasetsService,
  private router: Router,
  private sharedService: SharedService, private changeRef: ChangeDetectorRef) {
   }

  ngOnInit() {
    this.getItemList();
    const match  = this.router.url.match(/[0-9]+/);
    if (match) {
        this.handleRouteId(match[0]);
    } else {
    //  this.handleRouteId(0);
    }
    //  this.route.params.subscribe(res => {
    // //  this.handleRouteId(res);
    //  });
  }
  handleRouteId(routeId) {
    const id = routeId || '0';
    this.selectedIndex = id;
    /** SetTimeout just to fix expressionChanged error. Not important */
   setTimeout(() => this.selected.next(id), 0);
  }
   onImgLoad() {
    this.loadedImgCount++;
    if (this.loadedImgCount === this.itemList.length) {
      this.replaceImgWithSvg();
    }
   }
  getItemList() {
    this.loadedImgCount = 0;
    if (this.type === 'category') {
      this.getCategories();
    }
    if (this.type === 'organization') {
      this.getOrganizations();
    }
  }
  getCategories() {
      this.sharedService.getTableDataRows('api/get/Permission/Datasets/GetDatasetCategoryWithCount')
      .subscribe((res: Category[]) => {
        this.itemList = res;
        this.replaceImgWithSvg();
      });
  }
  getOrganizations() {
    this.sharedService.getTableDataRows('api/get/Permission/Datasets/GetOrganizationWithCategoryCount')
    .subscribe((res: Category[]) => {
      this.itemList = res;
      this.replaceImgWithSvg();
    });
}
  onItemClick(id: string) {
    this.selectedIndex = id;
 //   this.selected.next(id);
    this.router.navigate([`/home/datasets/by-${this.type}/${id}`]);
  }
  replaceImgWithSvg() {
    this.sharedService.replaceSvgWitInline();
  }
  ngAfterViewInit() {
    if (this.itemList) {
    //  this.replaceImgWithSvg();
    }
  }

}
