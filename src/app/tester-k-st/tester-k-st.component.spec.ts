import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TesterKSTComponent } from './tester-k-st.component';

describe('TesterKSTComponent', () => {
  let component: TesterKSTComponent;
  let fixture: ComponentFixture<TesterKSTComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TesterKSTComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TesterKSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
