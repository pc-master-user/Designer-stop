import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignersHomePageComponent } from './designers-home-page.component';

describe('DesignersHomePageComponent', () => {
  let component: DesignersHomePageComponent;
  let fixture: ComponentFixture<DesignersHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignersHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignersHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
