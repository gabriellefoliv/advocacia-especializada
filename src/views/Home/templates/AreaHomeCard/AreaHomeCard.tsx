import { AreaHomeCardButton, AreaHomeCardDiv, AreaHomeCardImg, AreaHomeCardTitle, AreaHomeTextGroup } from "./AreaHomeCardStyle"

interface AreaHomeProps {
    AreaHomeImg: any
    AreaHomeTitle: string
    hrefHomeCard: string
}

function AreaHomeCard({AreaHomeImg, AreaHomeTitle, hrefHomeCard}:AreaHomeProps) {
    return (
        <AreaHomeCardDiv href={hrefHomeCard}>
            <AreaHomeCardImg src={AreaHomeImg}/>
            <AreaHomeTextGroup>
                <AreaHomeCardTitle>{AreaHomeTitle}</AreaHomeCardTitle>
                <AreaHomeCardButton>Saiba mais</AreaHomeCardButton>
            </AreaHomeTextGroup>
        </AreaHomeCardDiv>
    )
}

export default AreaHomeCard

// trabalhista, consumidor bancário, militar