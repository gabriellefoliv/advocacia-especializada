import AreaHomeCard from "./AreaHomeCard";
import Familia from '../../../img/direitodefamilia.jpg'
import Criminal from '../../../img/direitocriminal.jpg'

function AreaHome() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-lg md:text-xl font-bold">Acesse uma de nossas áreas de atuação:</h1>
            <div className="w-full flex flex-col">
                <AreaHomeCard
                    hrefHomeCard="/areasdeatuacao/familia" 
                    AreaHomeImg={Familia}
                    AreaHomeTitle="Direito de Família"
                />
                <AreaHomeCard
                    hrefHomeCard="/areasdeatuacao/criminal"
                    AreaHomeImg={Criminal}
                    AreaHomeTitle="Direito Criminal"
                />
                
            <a className="p-4 mt-5 text-xl font-bold bg-white transition duration-500 shadow-xl hover:transition-transform hover:scale-110" href="/areasdeatuacao">Conheça todas as áreas</a>
            </div>
        </div>
    )
}

export default AreaHome