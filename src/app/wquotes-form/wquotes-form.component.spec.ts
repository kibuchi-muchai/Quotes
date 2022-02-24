import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WquotesFormComponent } from './wquotes-form.component';

describe('WquotesFormComponent', () => {
  let component: WquotesFormComponent;
  let fixture: ComponentFixture<WquotesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WquotesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WquotesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
