import { Route, Routes } from "react-router-dom";
import Home from "../views/Home/Home";
import Equipe from "../views/Equipe/Equipe";
import Areas from "../views/AreasdeAtuacao/Areas";
import Contato from "../views/Contato/Contato";
import Criminal from "../views/AreasdeAtuacao/templates/pages/criminal";
import Familia from "../views/AreasdeAtuacao/templates/pages/familia";



function Main() {
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/equipe' element={<Equipe/>} />
            <Route path='/areasdeatuacao' element={<Areas/>} />
            <Route path='/contato' element={<Contato/>} />
            <Route path='/areasdeatuacao/criminal' element={<Criminal/>} />
            <Route path='/areasdeatuacao/familia' element={<Familia/>} />
        </Routes>
    )
}

export default Main