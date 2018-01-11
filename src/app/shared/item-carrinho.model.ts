export class ItemCarrinho{
    constructor(
        public idOferta: number,
        public img: object,
        public titulo: string,
        public descricao_oferta: string,
        public valor: number,
        public quantidade: number
    ){}
}
