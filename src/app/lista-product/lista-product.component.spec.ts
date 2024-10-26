import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductComponent } from './lista-product.component';

describe('ListaProductComponent', () => {
  let component: ListaProductComponent;
  let fixture: ComponentFixture<ListaProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
