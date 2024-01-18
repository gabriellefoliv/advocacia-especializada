import { AreaHomeCardButton, AreaHomeCardDiv, AreaHomeCardImg, AreaHomeCardTitle, AreaHomeTextGroup } from "./AreaHomeCardStyle"

interface AreaHomeProps {
    AreaHomeImg: any
    AreaHomeTitle: string
}

function AreaHomeCard({AreaHomeImg, AreaHomeTitle}:AreaHomeProps) {
    return (
        <AreaHomeCardDiv>
            <AreaHomeCardImg src={AreaHomeImg}/>
            <AreaHomeTextGroup>
                <AreaHomeCardTitle>{AreaHomeTitle}</AreaHomeCardTitle>
                <AreaHomeCardButton href="/areasdeatuacao">Saiba mais</AreaHomeCardButton>
            </AreaHomeTextGroup>
        </AreaHomeCardDiv>
    )
}

export default AreaHomeCard

// trabalhista, consumidor bancário, militar