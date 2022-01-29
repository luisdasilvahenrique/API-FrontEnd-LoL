import { useEffect, useState } from "react";
import { Container, Content } from "./styles";
import { Spinner } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

import api from "../../services/api";

function Summoner({ match }){
    const [summoner, setSummoner] = useState(Object)
    const [loading, setLoading] = useState(0);
    useEffect(() => {
        async function loadData(){
            setLoading(1);
            await api.get(`/summoner/${match.params.id}`)
            .then(res => {
                setSummoner(res.data)
            })
            .catch(e => alert("Houve um erro ao buscar summoner"))
            
            setLoading(0);
        }
        loadData();
    }, []) 
    
    return (<>
    
    {
    
    <Container>
        loading ? 
        
        <div>
            <Spinner animation="border" variant="light" />
        </div>
        

        :
        <div>
            teste
        </div>

        </Container>
    }
    

    </>)
}

export default Summoner;
