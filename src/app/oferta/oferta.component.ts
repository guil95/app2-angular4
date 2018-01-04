import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
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
    private ofertasService: OfertasService) {

     }

  ngOnInit() {
    // this.route.snapshot.params['id']

    // this.route.params.subscribe((param) => {
    //   console.log(param)
    // })

    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
        .then((oferta: Oferta) => {
          this.oferta = oferta
        })
    
    // //observable (observável)
    // let meuObservableTeste = Observable.create((observer: Observer<number>)=> {
    //   observer.next(1)

    //   observer.complete()
    //   observer.error('cagado')
    //   observer.next(2)
    // })


    // //observable (observador)
    // this.meuObservableTesteSubscription = meuObservableTeste.subscribe(
    //     (resultado: any) => console.log(resultado + 7),
    //     (erro: string) => console.log(erro),
    //     () => console.log('deu certo')
    // )



  //   let tempo = Observable.interval(500)

  //  this.tempoObservableSubscription =  tempo.subscribe(()=>console.log('chupa'))
  }

  ngOnDestroy(){
    // this.meuObservableTesteSubscription.unsubscribe()
    // this.tempoObservableSubscription.unsubscribe()
  }

}
