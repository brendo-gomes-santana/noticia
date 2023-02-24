import './style-home.css';
import {useEffect, useState} from 'react';
import api from '../../servico/Api';

function Home(){
    const [noticias, setNoticias] = useState([]);

    useEffect(()=>{
        async function loadNoticias(){
            const response = await api.get('top-headlines/',{
                params:{
                    country: 'br',
                    apiKey: '919b355c62ef4428868e4c162f9156e0',
                }
            })
            //console.log(response.data.articles);
            setNoticias(response.data.articles);
        };

        loadNoticias();
    },[])

    return(
        <main className='container'>
            <h1>Noticias dessa semana</h1>
            <div className='noticias-semana'>
                {noticias.map((not)=>{
                        return(
                            <article key={not.id}>
                                <img src={not.urlToImage} alt={not.title}/>
                                <strong>{not.title}</strong>
                                <p>Descrição: {not.description}</p>
                                <a target='blank' href={not.url}>Acessa materia</a>
                            </article>
                        )
                    })}
            </div>

        </main>
    )
};

export default Home;