interface CardProps {
    Img: any
    Nome: string
    Atuacao: string
    Telefone: string
    hrefWpp: string
    hrefEmail: string
}

function EquipeCard({Img, Nome, Atuacao, Telefone, hrefWpp}:CardProps) {
    return (
        <div className=" bg-white my-7 mx-16 rounded-lg shadow-xl transition duration-300 hover:transition hover:scale-105 flex flex-col justify-center items-center">
            <img className="w-[250px] h-[250px] my-2 mx-5 rounded-lg object-cover py-2 px-5" src={Img}/>
            <h3 className="text-center font-bold text-lg">{Nome}</h3>
            <div className="flex justify-center mt-1 py-2">
                <p className="font-bold">Atuação: </p>
                <p className="ml-1"> {Atuacao}</p>
            </div>
            <div className="flex justify-center mt-1 py-2">
                <p className="font-bold">Telefone: </p>
                <p className="ml-1"> {Telefone}</p>
            </div>
            <div className="flex justify-center mt-1 py-2">
                <a className="bg-lime-600 hover:opacity-70 hover:transition hover:duration-500 transition duration-500 p-2 px-3 rounded-md font-bold text-white outline-none border-none" href={hrefWpp} target="_blank">WhatsApp</a>
            </div>
            
        </div>
    )
}

export default EquipeCard