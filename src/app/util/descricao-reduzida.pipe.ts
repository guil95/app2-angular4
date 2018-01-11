import { Pipe, PipeTransform } from '@angular/core'


@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform{
    transform(texto: string, param: number = 15) : string{
        return texto.length > param ? texto.substr(0,param) + '...' : texto
    }
}