import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from 'src/app/categories/category.service';
import { Category } from 'src/app/categories/models/category.model';
import { Observable } from 'rxjs';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'module-sidebar',
  templateUrl: './module-sidebar.component.html',
  styleUrls: ['./module-sidebar.component.scss']
})
export class ModuleSidebarComponent implements OnInit {
  @Output() datasetGroups = new EventEmitter();
  @Output() catId = new EventEmitter();
 items: Category[];
 form: FormGroup;
 catIds: string[] = [];
 ready = false;
 constructor(private categoryService: CategoryService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.getCategories();
     this.route.params.subscribe(res => {
      this.catIds.push(res['id']);
      this.catId.emit(res['id']);
   //  this.initForm();
     });
  }
  buildFormControls() {
    const controls = this.items.map(cat => new FormControl(this.catIds.includes(cat.id)));
    this.form = this.formBuilder.group({
      categories: new FormArray(controls)
    });
    this.ready = true;
    this.listenToFormChange();
  }
  listenToFormChange() {
 // this.form.valueChanges.subscribe(res => console.log(res))
  }
  onCheckChange(state: boolean, id: string) {
    this.catIds = [id];
    this.catId.emit(id);
    this.buildFormControls();
  }
  getCategories() {
    this.categoryService.getCategories()
    .subscribe((res: Category[]) => {
      this.items = res;
      this.buildFormControls();
    });
  }

}
