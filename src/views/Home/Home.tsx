import { Banner, HomeContainer, LeftText, RightImg } from "./HomeStyle"
import Law from '../../img/thamifoto.png'


function Home() {
    return (
        <HomeContainer>
            {/* <a href="https://storyset.com/people">People illustrations by Storyset</a> */}
            <Banner>
                <LeftText>Advocacia Especializada</LeftText>
                <RightImg src={Law}/>
            </Banner>
        </HomeContainer>
    )
}

export default Home