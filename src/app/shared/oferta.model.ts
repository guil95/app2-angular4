export class Oferta{
    public id: number
    public categoria: string
    public titulo: string
    public descricao_oferta: string
    public anunciante: string
    public valor: number
    public destaque: true
    public imagens: Array<object> = [
        {url: "/assets/ofertas/3/img1.jpg"},
        {url: "/assets/ofertas/3/img2.jpg"},
        {url: "/assets/ofertas/3/img3.jpg"},
        {url: "/assets/ofertas/3/img4.jpg"},
        {url: "/assets/ofertas/3/img5.jpg"},
        {url: "/assets/ofertas/3/img6.jpg"}
    ]
}