import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveResizerComponent } from './responsive-resizer.component';

describe('ResponsiveResizerComponent', () => {
  let component: ResponsiveResizerComponent;
  let fixture: ComponentFixture<ResponsiveResizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveResizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveResizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
