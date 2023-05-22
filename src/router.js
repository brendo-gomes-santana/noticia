import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './componentes/Header/Header'
import Nav from './componentes/Nav/Nav'

import Home from './pages/Home/Home.js';
import Pesquisar from './pages/Pesquisar/Pesquisar';


function RouterApp(){
    return(
        <BrowserRouter>

            <Header/>
            <Nav/>

            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/search' element={ <Pesquisar/> }/>
            </Routes>

        </BrowserRouter>
    )
};

export default RouterApp;