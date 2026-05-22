import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImmeubleHotel } from './list-immeuble-hotel';

describe('ListImmeubleHotel', () => {
  let component: ListImmeubleHotel;
  let fixture: ComponentFixture<ListImmeubleHotel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListImmeubleHotel],
    }).compileComponents();

    fixture = TestBed.createComponent(ListImmeubleHotel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
