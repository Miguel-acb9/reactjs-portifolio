import './Menu.scss';
import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";

export default function Menu({ menuAberto, setMenuAberto }) {
    return (
        <div className={'menu ' + (menuAberto && 'ativo')}>
            <div className="itens">
                <ul>
                    <li onClick={() => setMenuAberto(false)}><a href="#intro">Início</a></li>
                    <li onClick={() => setMenuAberto(false)}><a href="#portifolio">Portifólio</a></li>
                    <li onClick={() => setMenuAberto(false)}><a href="#trabalhos">Trabalhos</a></li>
                    <li onClick={() => setMenuAberto(false)}><a href="#depoimentos">Depoimentos</a></li>
                    <li onClick={() => setMenuAberto(false)}><a href="#contato">Contato</a></li>
                </ul>
            </div>
            
            <div className="siga-me">
                <p>Siga-me</p>
                <div className="redes-sociais">
                    <a href="https://www.linkedin.com/in/miguel-acb9/" target="_blank" rel="noreferrer"><SiLinkedin className='item'/></a>
                    <a href="https://github.com/Miguel-acb9/" target="_blank" rel="noreferrer"><SiGithub className='item'/></a>
                    <a href="https://www.instagram.com/miguel_acb9/" target="_blank" rel="noreferrer"><SiInstagram className='item'/></a>
                </div>   
            </div>
        </div>
    );
}