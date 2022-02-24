import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WquotesDetailComponent } from './wquotes-detail.component';

describe('WquotesDetailComponent', () => {
  let component: WquotesDetailComponent;
  let fixture: ComponentFixture<WquotesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WquotesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WquotesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
