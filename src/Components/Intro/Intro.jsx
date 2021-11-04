// Importação de módulos e bibliotecas
import './Intro.scss';
import Typical from 'react-typical';
import { BiSend, BiMouse, BiDownArrowAlt } from "react-icons/bi";
import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";

export default function Intro() {
    return (
        <section id='intro' className='intro'>
            <div className="intro-vertical">
                <div className="intro-horizontal">
                    <div className="esquerda">
                        <div className="redes-sociais">
                            <a href="https://www.linkedin.com/in/miguel-acb9/" target="_blank" rel="noreferrer"><SiLinkedin className='item'/></a>
                            <a href="https://github.com/Miguel-acb9/" target="_blank" rel="noreferrer"><SiGithub className='item'/></a>
                            <a href="https://www.instagram.com/miguel_acb9/" target="_blank" rel="noreferrer"><SiInstagram className='item'/></a>
                        </div>  
                    </div>
                    <div className="direita">
                        <div className="pacote">
                            <div className="apresentacao">
                                <h1>
                                    <span>O</span>
                                    <span>l</span>
                                    <span>á</span>
                                    <span>, </span>
                                    <span>e</span>
                                    <span>u </span>
                                    <span>s</span>
                                    <span>o</span>
                                    <span>u </span>
                                    <span>o </span>
                                    <span>M</span>
                                    <span>i</span>
                                    <span>g</span>
                                    <span>u</span>
                                    <span>e</span>
                                    <span>l </span>
                                    <span>A</span>
                                    <span>l</span>
                                    <span>v</span>
                                    <span>e</span>
                                    <span>s</span>
                                </h1>
                            </div>
                            <h3>
                                <Typical 
                                    className = 'ocupacao'
                                    loop = { Infinity } 
                                    wrapper = 'b' 
                                    steps = {[
                                        'Desenvolvedor Front-end', 1500, 
                                        'Web designer', 1500,
                                        'Desenvolvedor de Back-end', 1500,
                                        'Criador de Conteúdo', 1500
                                    ]}
                                />
                            </h3> 
                            <p>
                                Experiência de alto nível em desenvolvimento e <br />
                                conhecimento em web design, produzindo trabalhos <br />
                                de qualidade e eficácia.
                            </p>
                            <div className="pacote-btn">
                                <a href='#contato'>
                                    Contate-me
                                    <BiSend className='icone'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="role-para-baixo">
                    <a href="#sobre-mim"><BiMouse className='item-mouse'/></a>
                    <a href="#sobre-mim"><p>Role para baixo</p></a>
                    <a href="#sobre-mim"><BiDownArrowAlt className='item-seta'/></a>
                </div>
            </div>
        </section>  
    );
}
