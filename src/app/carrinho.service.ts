import { ItemCarrinho } from './shared/item-carrinho.model'
import { Oferta } from './shared/oferta.model';

export class CarrinhoService {
    public itens: ItemCarrinho[] = []

    public exibirItens(): ItemCarrinho[]{
        return this.itens
    }

    public incluirItem(oferta: Oferta): void{
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1
        )

        //verificar item no array
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => {
            return item.idOferta === itemCarrinho.idOferta
        })
        if(itemCarrinhoEncontrado){
            itemCarrinhoEncontrado.quantidade += 1
        }else{
            this.itens.push(itemCarrinho)
        }
        
    }

    public totalCarrinhoCompras(): number{
        let total: number = 0

        // let itens = this.itens
        // for(let i in itens){
        //         total = total + (itens[i].quantidade * itens[i].valor)
        // }
        
        this.itens.map((item: ItemCarrinho) => {
            total += (item.quantidade * item.valor)
        })

        return total
    }

    public adicionarQuantidade(itemCarrinho: ItemCarrinho){

        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => {
            return item.idOferta === itemCarrinho.idOferta
        })

        if(itemCarrinhoEncontrado){
            itemCarrinhoEncontrado.quantidade += 1
        }
       
    }

    public removerQuantidade(itemCarrinho: ItemCarrinho){

        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => {
            return item.idOferta === itemCarrinho.idOferta
        })

        if(itemCarrinhoEncontrado){
      
          itemCarrinhoEncontrado.quantidade -= 1
          
          if((itemCarrinhoEncontrado.quantidade === 0)){
                this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado),1)
            }
        }
        
        
    }

    public totalEstoqueCarrinhoCompras(): number{
        let total: number = 0

        // let itens = this.itens
        // for(let i in itens){
        //         total = total + (itens[i].quantidade * itens[i].valor)
        // }
        
        this.itens.map((item: ItemCarrinho) => {
            total += (item.quantidade)
        })

        return total
    }

    public limparCarrinho(){
        this.itens = []
    }
}
