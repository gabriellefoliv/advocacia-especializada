import { Route, Routes } from "react-router-dom";
import Home from "../views/Home/Home";
import Equipe from "../views/Equipe/Equipe";
import Areas from "../views/AreasdeAtuacao/Areas";
import Contato from "../views/Contato/Contato";
import Bancario from "../views/AreasdeAtuacao/templates/pages/bancario";
import Civel from "../views/AreasdeAtuacao/templates/pages/civel";
import Consumidor from "../views/AreasdeAtuacao/templates/pages/consumidor";
import Criminal from "../views/AreasdeAtuacao/templates/pages/criminal";
import Familia from "../views/AreasdeAtuacao/templates/pages/familia";
import Militar from "../views/AreasdeAtuacao/templates/pages/militar";
import Previdenciario from "../views/AreasdeAtuacao/templates/pages/previdenciario";
import Trabalhista from "../views/AreasdeAtuacao/templates/pages/trabalhista";



function Main() {
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/equipe' element={<Equipe/>} />
            <Route path='/areasdeatuacao' element={<Areas/>} />
            <Route path='/contato' element={<Contato/>} />
            <Route path='/areasdeatuacao/bancario' element={<Bancario/>} />
            <Route path='/areasdeatuacao/civel' element={<Civel/>} />
            <Route path='/areasdeatuacao/consumidor' element={<Consumidor/>} />
            <Route path='/areasdeatuacao/criminal' element={<Criminal/>} />
            <Route path='/areasdeatuacao/familia' element={<Familia/>} />
            <Route path='/areasdeatuacao/militar' element={<Militar/>} />
            <Route path='/areasdeatuacao/previdenciario' element={<Previdenciario/>} />
            <Route path='/areasdeatuacao/trabalhista' element={<Trabalhista/>} />
        </Routes>
    )
}

export default Main