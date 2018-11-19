import { Component, OnInit } from '@angular/core';
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
 items: Category[];
 datasetGroups;
 form: FormGroup;
 catId: string;
 ready= false;
 constructor(private categoryService: CategoryService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.getCategories();
    this.getDatasetListByCategory();
     this.route.params.subscribe(res => {
      this.catId = res['id'];
     this.initForm();
     });
  }
  initForm() {
    this.categoryService.getCategories()
    .subscribe((res: Category[]) => {
      this.items = res;
      const controls = res.map(cat => new FormControl(cat.id === this.catId));
      this.form = this.formBuilder.group({
        categories: new FormArray(controls)
      });
      console.log(this.form);
      this.ready = true;
    });
  }
  getCategories() {
   // this.items$ = this.categoryService.getCategories();
  }
  getDatasetListByCategory() {
    this.categoryService.getDatasets().subscribe();
  }

}
