import { Link } from 'react-router-dom';


import Img_esporte from './img/esporte.jpg'
import Img_tecnologia from './img/tecnologia.jpg'


function Categorias(){
    return(
        <main className="contanier">
            <div className="categorias">
                <article>
                    <strong>Esporte</strong>
                    <img src={Img_esporte}alt='Esporte'/>
                    <Link to='/categoria/esporte'>Acessa</Link>
                </article>
                <article>
                    <strong>Tecnologia</strong>
                    <img src={Img_tecnologia} alt='Tecnologia'/>
                </article>
            </div>
        </main>
    )
};

export default Categorias;