import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsHomePageComponent } from './collections-home-page.component';

describe('CollectionsHomePageComponent', () => {
  let component: CollectionsHomePageComponent;
  let fixture: ComponentFixture<CollectionsHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
