import { Link } from "react-router-dom"
import Produto from "../../../models/Produto"
import { Pencil, Trash } from "@phosphor-icons/react"

interface CardProdutosProps {
  produto: Produto
}

function CardProdutos({ produto }: CardProdutosProps) {
  return (
    <div className="flex flex-col justify-between overflow-hidden border rounded-2xl bg-white">

      <div className="flex justify-end items-center w-full py-2 gap-2" >
        <Link to={`/editarcategoria/${produto.id}`}>
          <button><Pencil size={24} /></button>
        </Link>

        <Link to={`/deletarcategoria/${produto.id}`}>
          <button><Trash size={24} /></button>
        </Link>
      </div>

      <div className="gap-1">
        <img src={`${produto.foto}`} alt="Game cover" />
        <p>{produto.nome.toUpperCase()}</p>
        <p className="font-bold">{`R$ ${produto.preco}`}</p>
        <p className="italic">{`Categoria: ${produto.categoria}`}</p>
      </div>

      <div className="bg-teal-600">
        <p className="px-6 py-2 text-2xl font-bold text-white">Categoria</p>
      </div>

    </div>
  )
}

export default CardProdutos