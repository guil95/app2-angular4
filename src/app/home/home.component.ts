import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

public ofertas: Array<Oferta>

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertas2()
      .then((ofertas: Array<Oferta>) => {
        this.ofertas = ofertas
        console.log('paasou 3 segundos')
      })
      .catch((erro) => {
        console.log(erro)

      });
    console.log('oi')
  }

}
