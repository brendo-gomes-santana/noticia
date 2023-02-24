import "./style-header.css";
import img from './logo-not.png';

function Header(){
    return(
        <header>
                <img src={img}></img>
                <div className="div-mensagem">
                    <h1>BGSA</h1>
                    <p>A Notícia na Palma da Mão</p>
                </div>

        </header>
    )   
};

export default Header;