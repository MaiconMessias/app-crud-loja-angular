import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormProdutoComponent } from './template-form-produto.component';

describe('TemplateFormProdutoComponent', () => {
  let component: TemplateFormProdutoComponent;
  let fixture: ComponentFixture<TemplateFormProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFormProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateFormProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
