import { useState } from "react";
import { Container, Header, Img } from "./style";

import logo from "../../assets/logo.png";
import img from "../../assets/lol.png";

function Home({ history }){
    const [summoner, setSummoner] = useState("")

    return (
        <Container>
            <Header>
            <img src={logo} alt="logo" />
                <span>
                    <strong>LOL STATS</strong>
                </span>
            </Header>
            <h1>
                Busque pelo nome de <strong>invocador!</strong> 
            </h1>
            <form>
                <input
                value={summoner} 
                onChange={(e) => setSummoner(e.target.value)}
                placeholder="Summoner" />
                <label> BR1 </label>
                <button 
                onClick={() => history.push(`/summoner/${summoner}`)} >
                    BUSCAR
                </button>
            </form> 
            <Img src={img} alt="background"/>
        </Container>
    );    
}

export default Home;