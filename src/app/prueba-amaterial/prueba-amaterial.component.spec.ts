import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaAmaterialComponent } from './prueba-amaterial.component';

describe('PruebaAmaterialComponent', () => {
  let component: PruebaAmaterialComponent;
  let fixture: ComponentFixture<PruebaAmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaAmaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PruebaAmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
