import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }
  public ofertas: Array<Oferta>
  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurante')
        .then((ofertas: Array<Oferta>) => {
            this.ofertas = ofertas
            
        }).catch((erro) => {
          console.log(erro)
        })

  }

}
