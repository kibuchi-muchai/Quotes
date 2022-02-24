import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpwardComponent } from './upward.component';

describe('UpwardComponent', () => {
  let component: UpwardComponent;
  let fixture: ComponentFixture<UpwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpwardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
