import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrls: ['./ordem-compra-sucesso.component.css']
})
export class OrdemCompraSucessoComponent implements OnInit {

  //usando @Input ele pega o valor passado no html
  @Input() public idPedidoCompra: number
  
  constructor() { }

  ngOnInit() {
  }

}
