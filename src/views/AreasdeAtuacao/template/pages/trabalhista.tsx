import AreaPageExample from "../AreaPageExample/AreaPageExample"
import Trabalho from '../../../../img/trabalhista.jpg'
import WppButton from "../../../../components/WppButton/WppButton"
import { ButtonHolder } from "../AreaPageExample/AreaPageExampleStyle"


function Trabalhista() {
    return(
        <>
            <AreaPageExample 
                ETitle="Direito do Trabalho" 
                EImg={Trabalho} 
                EText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <ButtonHolder>
                <WppButton/>
            </ButtonHolder>
        </>
    )
}

export default Trabalhista