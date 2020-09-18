import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DalphaportfolioComponent } from './dalphaportfolio.component';

describe('DalphaportfolioComponent', () => {
  let component: DalphaportfolioComponent;
  let fixture: ComponentFixture<DalphaportfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DalphaportfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DalphaportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
