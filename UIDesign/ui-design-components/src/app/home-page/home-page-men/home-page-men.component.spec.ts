import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageMenComponent } from './home-page-men.component';

describe('HomePageMenComponent', () => {
  let component: HomePageMenComponent;
  let fixture: ComponentFixture<HomePageMenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageMenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
