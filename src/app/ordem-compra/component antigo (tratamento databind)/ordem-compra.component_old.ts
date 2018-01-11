// import { Component, OnInit } from '@angular/core';
// import {OrdemCompraService} from '../ordem-compra.service'
// import {Pedido} from '../shared/pedido.model'

// @Component({
//   selector: 'app-ordem-compra',
//   templateUrl: './ordem-compra.component.html',
//   styleUrls: ['./ordem-compra.component.css'],
//   providers:[OrdemCompraService]
// })
// export class OrdemCompraComponent implements OnInit {

//   public idPedidoCompra: number

// //Pedido
//   public pedido: Pedido = new Pedido('','','','')
//   public endereco: string = ''
//   public numero: string = ''
//   public complemento: string = ''
//   public formaPagamento: string = ''
 


//   private formasPagamento: Array<string> = ['debito', 'dinheiro']

//   //controles de validação dos campos

//   public enderecoValido: boolean
//   public numeroValido: boolean
//   public complementoValido: boolean
//   public formaPagamentoValido: boolean

//   //estados primitivosdos campos (pristine)

//   public enderecoEstadoPrimitivo: boolean = true
//   public numeroEstadoPrimitivo: boolean = true
//   public complementoEstadoPrimitivo: boolean = true
//   public formaPagamentoEstadoPrimitivo: boolean = true

//   //controlar botao

//   public formEstado: string = 'disabled'


//   constructor(private ordemCompraService: OrdemCompraService) { }

//   ngOnInit() {
//   }

//   public atualizaComplemento(complemento: string): void{
//     this.complemento = complemento

//     this.complementoEstadoPrimitivo = false

//     this.complementoValido = this.complemento.length > 0 ? true : false

//     this.habilitaForm()
//   }

//   public atualizaEndereco(endereco: string): void{
//     this.endereco = endereco

//     this.enderecoEstadoPrimitivo = false

//     this.enderecoValido = this.endereco.length > 3 ? true : false

//     this.habilitaForm()
    
//   }


//   public atualizaNumero(numero: string): void{
//     this.numero = numero

//     this.numeroEstadoPrimitivo = false

//     this.numeroValido = this.numero.length > 0 ? true : false

//     this.habilitaForm()
//   }

//   public atualizaFormaPagamento(formaPagamento: string): void{
//     this.formaPagamento = formaPagamento

//     this.formaPagamentoEstadoPrimitivo = false

//     let controle = this.formasPagamento.indexOf(this.formaPagamento)
//     this.formaPagamentoValido = controle != 0 && controle != 1 ? false : true

//     this.habilitaForm()
//   }

//   public habilitaForm():void{
//     if(this.enderecoValido == true && this.formaPagamentoValido == true && this.numeroValido == true){
//       this.formEstado = ''
//     }else{
//       this.formEstado = 'disabled'
//     }
//   }

//   public confirmarCompra(): void{
//     this.pedido.endereco = this.endereco
//     this.pedido.complemento = this.complemento
//     this.pedido.numero = this.numero
//     this.pedido.formaPagamento = this.formaPagamento

//     this.ordemCompraService.efetivarCompra(this.pedido)
//         .subscribe((idPedido: number) => {
//           this.idPedidoCompra = idPedido
//         })
//   }
// }
