import { Check, X } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function DeletarCategoria() {
  return (
    <section className="w-full my-8 flex flex-col justify-center items-center">
      <div className='container mx-auto px-4 flex flex-col justify-center items-center'>
        <div className="mx-1">
          <h1 className='text-2xl md:text-3xl lg:text-4xl text-center my-4'>Deletar Categoria</h1>
          <p className='text-center text-sm md:text-lg font-semibold mb-4'>
            Você tem certeza de que deseja apagar o categoria a seguir?</p>
          <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header
              className='py-2 px-6 text-2xl font-bold bg-slate-700 text-white  '>
              Categoria
            </header>
            <p className='h-full p-8 text-2xl lg:text-3xl bg-slate-200'>Categoria</p>
            <div className="flex">
              <Link to=''
                className='flex items-center justify-center w-full py-2 bg-teal-600 text-slate-50 hover:bg-teal-800'>
                <button><Check size={24} className='text-white' /></button>
              </Link>

              <Link to=''
                className='flex items-center justify-center w-full bg-red-500 text-slate-50 hover:bg-red-700'>
                <button><X size={24} className='text-white' /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default DeletarCategoria;