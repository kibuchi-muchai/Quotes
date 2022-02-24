import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WquotesComponent } from './wquotes.component';

describe('WquotesComponent', () => {
  let component: WquotesComponent;
  let fixture: ComponentFixture<WquotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WquotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WquotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
