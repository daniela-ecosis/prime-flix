import { useEffect, useState } from "react";
import api from '../../services/api';

function Home() {

    const [filmes, setFilmes] = useState([]);

    useEffect(()=> {

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "fd0be2e2611fbac51cb4e5a706c1aa36",
                    language: "pt-BR",
                    page: 1,
                }
            })
            console.log(response);
        }

        loadFilmes();

    }, [])

    return(
        <div>
            <h1>Bem vindo a página Home</h1>
        </div>
    )
}

export default Home;