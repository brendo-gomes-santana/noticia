import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './componentes/Header/Header'
import Nav from './componentes/Nav/Nav'

import Home from './pages/Home/Home.js';
import Pesquisar from './pages/Pesquisar/Pesquisar';
import Categorias from './pages/Categoria/Categorias'

import Categoria_esporte from './pages/Categoria/Tipos_de_categorias/Esporte';

function RouterApp(){
    return(
        <BrowserRouter>

            <Header/>
            <Nav/>

            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/search' element={ <Pesquisar/> }/>
                <Route path='/categoria' element={ <Categorias/> }/>

                <Route path='/categoria/esporte' element={ <Categoria_esporte/> }/>
            </Routes>

        </BrowserRouter>
    )
};

export default RouterApp;