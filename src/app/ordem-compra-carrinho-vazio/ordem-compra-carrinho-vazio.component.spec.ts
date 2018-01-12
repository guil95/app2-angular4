import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemCompraCarrinhoVazioComponent } from './ordem-compra-carrinho-vazio.component';

describe('OrdemCompraCarrinhoVazioComponent', () => {
  let component: OrdemCompraCarrinhoVazioComponent;
  let fixture: ComponentFixture<OrdemCompraCarrinhoVazioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemCompraCarrinhoVazioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemCompraCarrinhoVazioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
