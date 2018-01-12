import { Component, OnInit } from '@angular/core'
import { OfertasService } from '../ofertas.service'
import { Observable } from 'rxjs/Observable';
import { Oferta } from '../shared/oferta.model';
import { Subject } from 'rxjs/Subject';
import { CarrinhoService } from '../carrinho.service'

import '../util/rxjs-extensions'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
        .debounceTime(1000)
        .distinctUntilChanged()
        .switchMap((termoDaBusca: string) => {
          if(termoDaBusca.trim() === ""){
            return Observable.of<Oferta[]>([])
          }
          return this.ofertasService.pesquisaOfertas(termoDaBusca)
    })
    .catch((err: any) => {
      return Observable.of<Oferta[]>([])
    })
    //sem usar o | async no html
    // this.ofertas.subscribe((ofertas: Oferta[]) => {
    //   this.ofertasArr = ofertas
    // })
  }

  public pesquisa(termoDaBusca: string): void{
    // if(termoDaBusca.trim() !== ""){
      this.subjectPesquisa.next(termoDaBusca)
    // }
    
  }

  public limparBusca():void{
    this.subjectPesquisa.next('')
  }

}
