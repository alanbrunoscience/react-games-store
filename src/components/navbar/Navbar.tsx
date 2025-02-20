import { MagnifyingGlass, ShoppingCart, User } from '@phosphor-icons/react';

function Navbar() {
  return (
    <>
      <div className="w-full flex bg-slate-800 text-white justify-center text-lg py-4 px-4">
        <div className="flex items-center w-1/3">
          {/* <div className="flex justify-start items-center text-lg w-1/3"> */}
          <img
            className="h-[6vh]"
            src="https://ik.imagekit.io/alanbrunoscience/Games%20Stores/logolg.png?updatedAt=1739995098669"
            alt="GameVerse Logo"
          />
          <p className="font-bold text-3xl mx-4">GameVerse</p>
        </div>

        <div className="flex items-center w-1/3 justify-evenly">
          <form onSubmit={() => console.log('Pesquisar')} className="w-5/6">
            <input
              id="product"
              type="text"
              name="product"
              placeholder="Enter the product name"
              className="w-full text-gray-800 bg-white rounded-sm py-1 px-2"
            />
          </form>

          <div className="w=1/6 bg-teal-700 rounded-sm py-1 px-2 mx-2">
            <MagnifyingGlass size={26} />
          </div>
        </div>

        <div className="flex w-1/3 items-center">
          <nav className="w-full px-2">
            <ul className="flex list-none justify-between px-4">
              <li className="">Produtos</li>
              <li className="">Categorias</li>
              <li className="">Cadastrar Categoria</li>
              <li><User size={32} /></li>
              <li><ShoppingCart size={32} /></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar