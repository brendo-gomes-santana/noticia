import './style-nav.css';

import {Link, useNavigate} from 'react-router-dom';

import { useState } from 'react';
 


function Nav(){
    // para fazer a pesquisar na api
    const [pesquisar, setPesquisar] = useState('');
    const navigate = useNavigate();
    

    const handleSubmite = (e)=>{
        e.preventDefault()

        //console.log(pesquisar)
        //validação
        if(!pesquisar) return

        navigate(`/search?q=${pesquisar}`)
        setPesquisar('');
    }

    return(
        <nav>
            <div className='navegacao'>
                <Link to='/'>Home</Link>
                <Link to='/categoria'>Categorias</Link>
            </div>


            <form onSubmit={handleSubmite}>
                 <input id='pesquisar' 
                 placeholder='Pesquise' 
                 onChange={(e)=>setPesquisar(e.target.value)}
                 value={pesquisar}/>

                 <button type='submit'>Pesquisar</button>
            </form>

        </nav>
    )
};

export default Nav;