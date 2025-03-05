import { Link } from "react-router-dom"
import Produto from "../../../models/Produto"
import { Pencil, Trash } from "@phosphor-icons/react"

interface CardProdutosProps {
  produto: Produto
}

function CardProdutos({ produto }: CardProdutosProps) {
  return (
    <div className="flex flex-col justify-between overflow-hidden drop-shadow-xl rounded-xl bg-white h-full transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">

      <div className="flex justify-end items-center w-full py-2 px-2 gap-2" >
        <Link to={`/editarcategoria/${produto.id}`}>
          <button><Pencil size={24} className="mr-1 hover:fill-teal-800" /></button>
        </Link>

        <Link to={`/deletarcategoria/${produto.id}`}>
          <button><Trash size={24} className="mr-1 hover:fill-red-700" /></button>
        </Link>
      </div>

      <div className="flex flex-col gap-1 px-2 py-4 justify-center items-center">
        <img src={`${produto.foto}`} alt="Game cover" className="mx-auto my-1 h-64 max-w-75" />
        <p className="text-base lg:text-lg uppercase">{produto.nome}</p>
        <h3 className="text-lg lg:text-xl font-bold uppercase">
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(produto.preco)}
        </h3>
        <p className="text-base lg:text-lg italic">{`Categoria: ${produto.categoria?.tipo}`}</p>
      </div>

      <div className="flex flex-wrap">
        <button className="flex items-center justify-center w-full py-2 text-white bg-teal-600 hover:bg-teal-900 text-base">
          Comprar
        </button>
      </div>

    </div>
  )
}

export default CardProdutos