import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, cadastrar, listar } from "../../../services/Service";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { PacmanLoader } from "react-spinners";

function FormCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();

    async function buscarCategoriaPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategoria);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error: unknown) {
            ToastAlerta("Categoria não encontrada!", "erro");
            retornar();
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriaPorId(id);
        } else {
            setCategoria({
                id: 0,
                tipo: "",
            });
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria);
                ToastAlerta("A categoria foi atualizada com sucesso!", "sucesso");
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error: unknown) {
                ToastAlerta("Erro ao atualizar a categoria!", "erro");
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria);
                ToastAlerta("A categoria foi cadastrada com sucesso!", "sucesso");
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error: unknown) {
                ToastAlerta("Erro ao cadastrar a categoria!", "erro");
            }
        }

        setIsLoading(false);
        retornar();
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
            </h1>

            {isLoading && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-200 bg-opacity-75 z-50">
                    <PacmanLoader
                        color="#0D9488"
                        margin={0}
                        size={50}
                        speedMultiplier={2}
                        aria-label="Pacman-loading"
                    />
                </div>
            )}

            <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="categoria">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Informe aqui o nome da categoria"
                        name='tipo'
                        className="p-2 border-2 rounded border-slate-700 bg-white"
                        required
                        value={categoria.tipo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="flex justify-center w-1/2 py-2 mx-auto rounded text-slate-100 bg-slate-400 hover:bg-slate-800"
                    type="submit"
                    disabled={isLoading} // Desabilita o botão durante o carregamento
                >
                    <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;