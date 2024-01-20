import { AreaCardContainer, AreaCardGroup, AreaCardImg, AreaCardMais, AreaCardTitle } from "./AreaCardStyle";

interface AreaCardProps {
    ACImg: any
    ACTitle: string
    AChref: string
}

function AreaCard({ACImg, ACTitle, AChref}:AreaCardProps) {
    return (
        <AreaCardContainer href={AChref}>
            <AreaCardImg src={ACImg}/>
            <AreaCardGroup>
                <AreaCardTitle>{ACTitle}</AreaCardTitle>
                <AreaCardMais>Saiba Mais</AreaCardMais>
            </AreaCardGroup>
        </AreaCardContainer>
    )
}

export default AreaCard