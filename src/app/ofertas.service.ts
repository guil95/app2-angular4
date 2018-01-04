import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core'
import {Oferta} from './shared/oferta.model'
import { URL_API_OFERTAS} from './app.api'
import { URL_API_COMO_USAR} from './app.api'
import { URL_API_ONDE_FICA} from './app.api'

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/retry'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class OfertasService{


constructor(private http: Http){}


    public getOfertas(): Promise<Oferta[]>{
		//efetuar uma requisição http
		//retornar uma promise Ofertas[]
		return this.http.get(`${URL_API_OFERTAS}?destaque=true`)
			.toPromise()
			.then((resposta: Response) => resposta.json())
		
    }

    public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]>{
        return this.http.get(`${URL_API_OFERTAS}?categoria=${categoria}`)
        .toPromise()
        .then((resposta: Response) => resposta.json())
    }

    public getOfertaPorId(id: number) : Promise<Oferta>{
        return this.http.get(`${URL_API_OFERTAS}?id=${id}`)
        .toPromise()
        .then((resposta: Response) => resposta.json().shift())
    }

    public getComoUsarOfertaPorId(id: number): Promise<string>{
        return this.http.get(`${URL_API_COMO_USAR}?id=${id}`)
        .toPromise()
        .then((resposta: Response) => resposta.json().shift().descricao)
    }

    public getOndeFicaOfertaPorId(id: number): Promise<string>{
        return this.http.get(`${URL_API_ONDE_FICA}?id=${id}`)
        .toPromise()
        .then((resposta: Response) => resposta.json().shift().descricao)
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]>{
        return this.http.get(`${URL_API_OFERTAS}/?descricao_oferta_like=${termo}`)
            .retry(10)
            .map((resposta: Response) => resposta.json())
    }


}