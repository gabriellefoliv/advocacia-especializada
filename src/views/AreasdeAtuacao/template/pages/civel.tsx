import WppButton from "../../../../components/WppButton/WppButton"
import AreaPageExample from "../AreaPageExample/AreaPageExample"
import { ButtonHolder } from "../AreaPageExample/AreaPageExampleStyle"
import Civil from '../../../../img/direito_civil_foto.jpg'

function Civel() {
    return (
        <>
            <AreaPageExample 
                ETitle="Direito Civil" 
                EImg={Civil} 
                EText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <ButtonHolder>
                <WppButton/>
            </ButtonHolder>
        </>
    )
}

export default Civel