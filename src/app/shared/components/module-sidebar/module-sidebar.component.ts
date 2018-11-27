import { Component, OnInit, Output, EventEmitter, Input, HostBinding } from '@angular/core';
import { CategoryService } from 'src/app/categories/category.service';
import { Category } from 'src/app/categories/models/category.model';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
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
  @Output() checkboxId = new EventEmitter();
  @HostBinding('@fadeIn')
 itemList: Category[];
 form: FormGroup;
 checkboxIds: string[] = [];
 orgIds: string[] = [];
 ready = false;
 constructor(private categoryService: CategoryService, private formBuilder: FormBuilder,
  private route: ActivatedRoute, private organizationService: OrganizationService) {
   }

  ngOnInit() {
    this.getItemList();
     this.route.params.subscribe(res => {
      this.handleRouteId(res);
   //  this.initForm();
     });
  }
  handleRouteId(res) {
    const id = res['id'] || '0';
    this.checkboxIds.push(id);
    this.checkboxId.emit(id);
  }
  buildFormControls() {
    const controls = this.itemList.map(cat => new FormControl(this.checkboxIds.includes(cat.id)));
    this.form = this.formBuilder.group({
      items: new FormArray(controls)
    });
    this.ready = true;
    this.listenToFormChange();
  }
  listenToFormChange() {
 // this.form.valueChanges.subscribe(res => console.log(res))
  }
  onCheckChange(state: boolean, id: string) {
    this.checkboxIds = [id];
    this.checkboxId.emit(id);
    this.buildFormControls();
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
        this.buildFormControls();
      });
  }
  getOrganizations() {
    this.organizationService.getOrganizations()
    .subscribe((res: Category[]) => {
      this.itemList = res;
      this.buildFormControls();
    });
}
  onItemClick(index: string) {
    console.log(index)
    this.checkboxIds.push(index);
    this.checkboxId.emit(index);
    this.buildFormControls();
  }

}
