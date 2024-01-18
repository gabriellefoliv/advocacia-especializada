import { Container, AdvImg, AdvName, Tag, CardContainer, Title } from "./EquipeCardStyle"


interface CardProps {
    Img: any
    Nome: string
    Atuacao: string
    Telefone: string
}


function EquipeCard({Img, Nome, Atuacao, Telefone}:CardProps) {
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
            
        </CardContainer>
    )
}

export default EquipeCard