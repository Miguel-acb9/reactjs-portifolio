import './Menu.scss';
import { SiWhatsapp, SiLinkedin, SiGithub } from "react-icons/si";

export default function Menu({ menuAberto, setMenuAberto }) {
    return (
        <div className={'menu ' + (menuAberto && 'ativo')}>
            <ul>
                <li onClick={() => setMenuAberto(false)}><a href="#intro">Início</a></li>
                <li onClick={() => setMenuAberto(false)}><a href="#portifolio">Portifólio</a></li>
                <li onClick={() => setMenuAberto(false)}><a href="#trabalhos">Trabalhos</a></li>
                <li onClick={() => setMenuAberto(false)}><a href="#depoimentos">Depoimentos</a></li>
                <li onClick={() => setMenuAberto(false)}><a href="#contato">Contato</a></li>
            </ul>
            <div className="redes-sociais">
                <a href="#portifolio">
                    <SiWhatsapp style={{marginRight: '40px', color: 'black', fontSize: '30px'}}/>
                    <SiLinkedin style={{marginRight: '40px', color: 'black', fontSize: '30px'}}/>
                    <SiGithub style={{color: 'black', fontSize: '30px'}}/>
                </a>
            </div>
        </div>
    );
}