import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { DatasetsService } from 'src/app/datasets/datasets.service';
import { SharedService } from 'src/app/shared/shared.service';
import { Organization } from 'src/app/datasets/models/organization.model';

@Component({
  selector: 'organization-overview',
  templateUrl: './organization-overview.component.html',
  styleUrls: ['./organization-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationOverviewComponent implements OnInit, AfterViewInit {
  faSearch = faSearch;
  items: Organization[];
  constructor(
    private router: Router,
    private datasetService: DatasetsService,
    private sharedService: SharedService,
    private changeRef: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.getItems();
  }
  getItems() {
    this.datasetService.getOrganizations().subscribe(res => {
      this.items = res;
      this.replaceImgWithSvg();
      this.changeRef.detectChanges();
    });
  }
  onNavigate(id: string) {
    this.router.navigate(['/datasets/by-organization'], {
      queryParams: { id: id }
    });
  }
  replaceImgWithSvg() {
    setTimeout(() => {
      this.sharedService.replaceSvgWitInline();
    }, 10);
  }
  ngAfterViewInit() {
    if (this.items) {
      this.replaceImgWithSvg();
    }
  }
}
