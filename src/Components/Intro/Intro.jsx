// Importação de módulos e bibliotecas
import './Intro.scss';
import Foto from "../../Assets/Foto.png"
import { BiSend } from "react-icons/bi";

export default function Intro() {
    return (
        <section id='intro' className='intro'>
            <div className="intro-vertical">
                <div className="intro-horizontal">
                    <div className="esquerda">
                        <div className="pacote">
                            <h1>Olá, eu sou o Miguel Alves</h1>
                            <h3>Desenvolvedor de Software</h3>
                            <p>
                                Experiência de alto nível em desenvolvimento e <br />
                                conhecimento em web design, produzindo trabalhos <br />
                                de qualidade e eficácia.
                            </p>
                            <button>Contate-me<BiSend /></button>
                        </div>
                    </div>
                    <div className="direita">
                        {/* <img src={Foto} alt="" /> */}
                    </div>
                </div>
            </div>
        </section>  
    );
}
