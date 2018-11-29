import { Component, OnInit, Output, EventEmitter, Input, HostBinding } from '@angular/core';
import { CategoryService } from 'src/app/categories/category.service';
import { Category } from 'src/app/categories/models/category.model';
import { ActivatedRoute } from '@angular/router';
import { OrganizationService } from 'src/app/organizations/organization.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';

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
 constructor(private categoryService: CategoryService,
  private route: ActivatedRoute, private organizationService: OrganizationService) {
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
      this.categoryService.getCategories()
      .subscribe((res: Category[]) => {
        this.itemList = res;
      });
  }
  getOrganizations() {
    this.organizationService.getOrganizations()
    .subscribe((res: Category[]) => {
      this.itemList = res;
    });
}
  onItemClick(id: string) {
    this.selectedIndex = id;
    this.selected.next(id);
  }

}
