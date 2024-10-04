import { useState } from "react";

function BtnCategorias({setCategoria}) {
    const [selecionado, setSelecionado] = useState(0)
    const mudaCategoria = (novaCategoria) => {
        setCategoria(novaCategoria);
        setSelecionado(novaCategoria);
    };

    return ( 
            <div className="mt-14 mb-14 flex justify-center text-center gap-3 max-w-auto px-4 flex-wrap">
                <button className={`btn-categorias ${selecionado === 0 ? 'btn-categorias-ativo' : ''}`} onClick={() => mudaCategoria(0)}>Todos</button>
                <button className={`btn-categorias ${selecionado === 1 ? 'btn-categorias-ativo' : ''}`} onClick={() => mudaCategoria(1)}>Projeto 1</button>
                <button className={`btn-categorias ${selecionado === 2 ? 'btn-categorias-ativo' : ''}`} onClick={() => mudaCategoria(2)}>Projeto 2</button>
                <button className={`btn-categorias ${selecionado === 3 ? 'btn-categorias-ativo' : ''}`} onClick={() => mudaCategoria(3)}>Projeto 3</button>
            </div>
    );
}

export default BtnCategorias;