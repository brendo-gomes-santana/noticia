import {useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../../servico/Api'

import './style-pesquisar.css';

function Pesquisar(){
    const [SearchParams] = useSearchParams();
    const [pesquisar, setPesquisar] = useState([]);
    const query = SearchParams.get('q');

    useEffect(()=>{
        async function loadPesquisar(){
            const response = await api.get(`everything`, {
                params:{
                    q: `${query}`,
                    from: '2023-02-14',
                    sortBy: 'popularity',
                    apiKey: '919b355c62ef4428868e4c162f9156e0',

                }
            })

            //console.log(response.data);
            setPesquisar(response.data.articles);
        };
        loadPesquisar();
    }, [])


    return(
        <main className='container'>
            <h1>Resultado referente ao {query}</h1>
            <div className='Resultado'>
                {pesquisar.map((res) =>{
                    return(
                        <article key={res.id}>
                        <img src={res.urlToImage} alt={res.title}/>
                        <strong>{res.title}</strong>
                        <p>Descrição: {res.description}</p>
                        <a target='blank' href={res.url}>Acessa materia</a>
                    </article>
                    )
                })}
            </div>
        </main>
    )
};
export default Pesquisar;