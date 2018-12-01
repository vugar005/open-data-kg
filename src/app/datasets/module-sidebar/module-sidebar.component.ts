import { Component, OnInit, Output, EventEmitter, Input, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { DatasetsService } from '../datasets.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'module-sidebar',
  templateUrl: './module-sidebar.component.html',
  styleUrls: ['./module-sidebar.component.scss'],
  animations: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn, {params: {timing: 0.5, delay: 0}}))])]
})
export class ModuleSidebarComponent implements OnInit {
  @Input() type: string;
  @Output() datasetGroups = new EventEmitter();
  @Output() selected = new EventEmitter();
  @HostBinding('@fadeIn')
  itemList: Category[];
  orgIds: string[] = [];
  ready = false;
  selectedIndex: string;
 constructor(private route: ActivatedRoute, private datasetService: DatasetsService) {
   }

  ngOnInit() {
    this.getItemList();
     this.route.params.subscribe(res => {
      this.handleRouteId(res);
     });
  }
  handleRouteId(res) {
    const id = res['id'] || '0';
    this.selectedIndex = id;
    this.selected.next(id);
  }

  getItemList() {
    if (this.type === 'category') {
      this.getCategories();
    }
    if (this.type === 'organization') {
      this.getOrganizations();
    }
  }
  getCategories() {
      this.datasetService.getCategories()
      .subscribe((res: Category[]) => {
        this.itemList = res;
      });
  }
  getOrganizations() {
    this.datasetService.getOrganizations()
    .subscribe((res: Category[]) => {
      this.itemList = res;
    });
}
  onItemClick(id: string) {
    this.selectedIndex = id;
    this.selected.next(id);
  }

}
