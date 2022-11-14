import Image from "next/image";
import useQuisco from "../hooks/useQuiosco";
import Categoria from "./Categoria";

const Sidebar = () => {

    const {categorias} = useQuisco();

    return (
        <>
            <Image 
                width={130} 
                height={100} 
                src="/assets/img/logo.svg" 
                alt="Logo"
                priority={true}
                className="mx-auto"
            />

            <nav className="mt-10">
                {categorias.map(categoria=>(
                    <Categoria
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))}
            </nav>
        </>
    )
}

export default Sidebar