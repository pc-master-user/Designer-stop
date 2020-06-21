import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageWomenComponent } from './home-page-women.component';

describe('HomePageWomenComponent', () => {
  let component: HomePageWomenComponent;
  let fixture: ComponentFixture<HomePageWomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageWomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
