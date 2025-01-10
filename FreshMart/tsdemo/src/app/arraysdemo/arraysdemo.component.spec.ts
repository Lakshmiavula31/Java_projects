import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraysdemoComponent } from './arraysdemo.component';

describe('ArraysdemoComponent', () => {
  let component: ArraysdemoComponent;
  let fixture: ComponentFixture<ArraysdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArraysdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArraysdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
