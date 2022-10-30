import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuznewsComponent } from './buznews.component';

describe('BuznewsComponent', () => {
  let component: BuznewsComponent;
  let fixture: ComponentFixture<BuznewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuznewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuznewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
