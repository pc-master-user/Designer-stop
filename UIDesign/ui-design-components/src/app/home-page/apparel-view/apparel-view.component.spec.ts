import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparelViewComponent } from './apparel-view.component';

describe('ApparelViewComponent', () => {
  let component: ApparelViewComponent;
  let fixture: ComponentFixture<ApparelViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
