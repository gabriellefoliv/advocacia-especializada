import AreaHomeCard from "./AreaHomeCard";
import trabalhista from '../../../img/trabalhista.jpg'
import bancario from '../../../img/bancario.png'
import militar from '../../../img/militar.jpg'

function AreaHome() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold">Acesse uma de nossas áreas de atuação:</h1>
            <div className="flex flex-col">
                <AreaHomeCard
                    hrefHomeCard="/areasdeatuacao/trabalhista" 
                    AreaHomeImg={trabalhista}
                    AreaHomeTitle="Direito do Trabalho"
                />
                <AreaHomeCard
                    hrefHomeCard="/areasdeatuacao/bancario"
                    AreaHomeImg={bancario}
                    AreaHomeTitle="Direito do Consumidor Bancário"
                />
                <AreaHomeCard
                    hrefHomeCard="/areasdeatuacao/militar"
                    AreaHomeImg={militar}
                    AreaHomeTitle="Direito Militar"
                />
            <a className="p-4 mt-5 text-xl font-bold bg-white transition duration-500 shadow-xl hover:transition-transform hover:scale-110" href="/areasdeatuacao">Conheça todas as áreas</a>
            </div>
        </div>
    )
}

export default AreaHome