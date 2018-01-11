
import { Pedido } from './shared/pedido.model'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { URL_PEDIDOS } from './app.api';


@Injectable()
export class OrdemCompraService{

    constructor(private http: Http){}
    public efetivarCompra(pedido: Pedido): Observable<number>{
        let headers: Headers = new Headers()
        headers.append('Content-type', 'application/json')
        
        return this.http.post(
            URL_PEDIDOS,
            JSON.stringify(pedido),
            new RequestOptions({
                headers: headers
            })  
        )
        .map((resposta: Response) => resposta.json().id)
    }
}