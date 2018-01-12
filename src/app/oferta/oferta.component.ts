import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import { Params } from '@angular/router';
import {CarrinhoService} from '../carrinho.service'
@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  private tempoObservableSubscription: Subscription
  private meuObservableTesteSubscription: Subscription
  
  public oferta: Oferta

  constructor(
    private route: ActivatedRoute, 
    private ofertasService: OfertasService,
    public carrinhoService: CarrinhoService
  ) {}

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      
      this.ofertasService.getOfertaPorId(params.id)
          .then((oferta: Oferta) => {
             this.oferta = oferta
        })
    })   

  }

  public adicionarItemCarrinho(): void{
    this.carrinhoService.incluirItem(this.oferta)
    console.log(this.carrinhoService.exibirItens())
  }

  ngOnDestroy(){

  }

}
