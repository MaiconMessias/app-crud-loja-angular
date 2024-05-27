import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaprodutoComponent } from './listaproduto.component';

describe('ListaprodutoComponent', () => {
  let component: ListaprodutoComponent;
  let fixture: ComponentFixture<ListaprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaprodutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
