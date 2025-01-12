import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsqueceuPassComponent } from './esqueceu-pass.component';

describe('EsqueceuPassComponent', () => {
  let component: EsqueceuPassComponent;
  let fixture: ComponentFixture<EsqueceuPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsqueceuPassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsqueceuPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
