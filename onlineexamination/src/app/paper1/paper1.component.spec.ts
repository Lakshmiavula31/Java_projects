import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paper1Component } from './paper1.component';

describe('Paper1Component', () => {
  let component: Paper1Component;
  let fixture: ComponentFixture<Paper1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Paper1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paper1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
