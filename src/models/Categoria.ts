import Produto from "./Produto";

export default interface Categoria {
    id: number;
    tipo: string;
    produtos?: Produto[] | null;
}