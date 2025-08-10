import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sector1 } from './sector1';

describe('Sector1', () => {
  let component: Sector1;
  let fixture: ComponentFixture<Sector1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sector1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sector1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
