import { Container, AdvImg, AdvName, Tag, CardContainer, Title, EquipeWpp } from "./EquipeCardStyle"


interface CardProps {
    Img: any
    Nome: string
    Atuacao: string
    Telefone: string
    hrefWpp: string
    hrefEmail: string
}


function EquipeCard({Img, Nome, Atuacao, Telefone, hrefWpp}:CardProps) {
    return (
        <CardContainer>
            <AdvImg src={Img}/>
            <AdvName>{Nome}</AdvName>
            <Container>
                <Title>Atuação: </Title>
                <Tag> {Atuacao}</Tag>
            </Container>
            <Container>
                <Title>Telefone: </Title>
                <Tag> {Telefone}</Tag>
            </Container>
            <Container>
                <EquipeWpp href={hrefWpp} target="_blank">WhatsApp</EquipeWpp>
                {/* <EquipeEmail href={hrefEmail} target="_blank">Email</EquipeEmail> */}
            </Container>
            
        </CardContainer>
    )
}

export default EquipeCard