import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DalphateamComponent } from './dalphateam.component';

describe('DalphateamComponent', () => {
  let component: DalphateamComponent;
  let fixture: ComponentFixture<DalphateamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DalphateamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DalphateamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
