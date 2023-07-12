import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from '../../services/api'
import './filme-info.css'


function Filme() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "fd0be2e2611fbac51cb4e5a706c1aa36",
                    language: "pt-br",
                }
            })
            .then((response)=> {
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=> {
                console.log("FILME NÃO ENCONTRADO");
                navigate("/", { replace: true });
                return;
            })
        }
    
        loadFilme();

        return() => {
            console.log("COMPONENTE DESMONTADO")
        }
    }, [navigate,id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix");
        let filmesSalvos = JSON.parse(minhaLista) || []; 
        const hasFilmes = filmesSalvos.some( (filmesSalvos) => filmesSalvos.id === filme.id )

        if(hasFilmes) {
            alert("esse filme já está  na lista");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        alert("Filme salvo com sucesso")

    }

    if(loading)
    return(
        <div className="filme-info">
            <h1>Carregando detalhes...</h1>
        </div>
    )

    return (
        <div className="filme-info" >
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} ></img>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10 </strong>

            <div className="area-buttons">
                <button onClick={salvarFilme} >Salvar</button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${filme.title}`} target="blank" rel="noreferrer">
                        Trailer
                    </a>

                </button>

            </div>

        </div>

    )

}



export default Filme;