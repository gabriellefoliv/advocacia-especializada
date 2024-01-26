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
                EText={[]}
            />
            <ButtonHolder>
                <WppButton/>
            </ButtonHolder>
        </>
    )
}

export default Civel