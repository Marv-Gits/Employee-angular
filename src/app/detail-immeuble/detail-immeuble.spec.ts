import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailImmeuble } from './detail-immeuble';

describe('DetailImmeuble', () => {
  let component: DetailImmeuble;
  let fixture: ComponentFixture<DetailImmeuble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailImmeuble],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailImmeuble);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
