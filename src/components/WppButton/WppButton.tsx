import { Button, ButtonContainer, ButtonImg, ButtonText } from "./WppButtonStyle"

import Whatsapp from '../../img/whatsapp.png'


function WppButton() {
    return (
        <Button href="https://wa.me/message/V72SURNAJ3EKD1" target="_blank">
            <ButtonContainer >
                <ButtonImg src={Whatsapp}/>
                <ButtonText >Tenha um atendimento personalizado</ButtonText>
            </ButtonContainer>
        </Button>
    )
}


export default WppButton