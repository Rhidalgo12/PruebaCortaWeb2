import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RYMHomeComponent } from './rym-home.component';

describe('RymHomeComponent', () => {
  let component: RYMHomeComponent;
  let fixture: ComponentFixture<RYMHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RYMHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RYMHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
