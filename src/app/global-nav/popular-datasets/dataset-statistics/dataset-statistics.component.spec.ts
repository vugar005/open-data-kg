import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetStatisticsComponent } from './dataset-statistics.component';

describe('DatasetStatisticsComponent', () => {
  let component: DatasetStatisticsComponent;
  let fixture: ComponentFixture<DatasetStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
