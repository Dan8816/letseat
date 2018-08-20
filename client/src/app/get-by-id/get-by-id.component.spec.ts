import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIDComponent } from './get-by-id.component';

describe('GetByIDComponent', () => {
  let component: GetByIDComponent;
  let fixture: ComponentFixture<GetByIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetByIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
