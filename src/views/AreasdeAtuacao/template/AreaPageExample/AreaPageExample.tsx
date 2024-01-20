import { APContainer, APHeader, APImg, APSobre, APSobreContainer, APTitle } from "./AreaPageExampleStyle"

interface ExampleProps {
    ETitle: string
    EImg: any
    EText: string
}

function AreaPageExample({ETitle, EImg, EText}:ExampleProps) {
    return (
        <>
            <APHeader>
                <APTitle>{ETitle}</APTitle>
            </APHeader>
            <APContainer>
                <APImg src={EImg}/>
                <APSobreContainer>
                    <APSobre>{EText}</APSobre>
                </APSobreContainer>
            </APContainer>
        </>
    )
}

export default AreaPageExample