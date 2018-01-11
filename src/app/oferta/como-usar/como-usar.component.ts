import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../../ofertas.service'
import { Params } from '@angular/router/src/shared';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string
  
  constructor(private route: ActivatedRoute,
              private ofertasService: OfertasService
            ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.ofertasService.getComoUsarOfertaPorId(params.id)
      .then((resposta: any) => this.comoUsar = resposta)
    })

    
  }

}
