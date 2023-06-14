import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FighterComponent } from './fighter.component';

describe('FighterComponent', () => {
  let component: FighterComponent;
  let fixture: ComponentFixture<FighterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FighterComponent]
    });
    fixture = TestBed.createComponent(FighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
