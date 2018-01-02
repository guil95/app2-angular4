import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import {Oferta} from './shared/oferta.model'
import { URL_API_OFERTAS} from './app.api'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class OfertasService{


constructor(private http: Http){}


    public getOfertas(): Promise<Oferta[]>{
		//efetuar uma requisição http
		//retornar uma promise Ofertas[]
		return this.http.get(`${URL_API_OFERTAS}?destaque=true`)
			.toPromise()
			.then((resposta: any) => resposta.json())
		
    }

    public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]>{
        return this.http.get(`${URL_API_OFERTAS}?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta.json())
    }

    public getOfertaPorId(id: number) : Promise<Oferta>{
        return this.http.get(`${URL_API_OFERTAS}?id=${id}`)
        .toPromise()
        .then((resposta: any) => resposta.json().shift())
    }


}