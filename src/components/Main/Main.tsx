import { Route, Routes } from "react-router-dom";
import Home from "../../views/Home/Home";
import Equipe from "../../views/Equipe/Equipe";
import Areas from "../../views/AreasdeAtuacao/Areas";



function Main() {
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/equipe' element={<Equipe/>} />
            <Route path='/areasdeatuacao' element={<Areas/>} />
        </Routes>
    )
}

export default Main