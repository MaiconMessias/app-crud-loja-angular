export interface Produto{
    id?: number;
    titulo: string;
    descricao: string;
    preco: number;
    foto: Blob;
    links?: [{ rel: string, href: string }];
}