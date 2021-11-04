// Importação de módulos e bibliotecas
import './Servicos.scss';
import Tilt from 'react-tilt';
import { BiSend } from "react-icons/bi";

export default function Servicos() {
    return (
        <section id='servicos' className='servicos'>
            <div className='servicos_vertical'>
                <div className="servicos_horizontal">
                    <div className="titulo">
                        <h2>Serviços</h2>
                        <h3>O que eu ofereço</h3>
                    </div>
                    <div className='conteiner'>
                        <Tilt className='cartao' options={{max: 40}}>
                            <div className="conteudo">
                                <h2>01</h2>
                                <h3>Cartão Um</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ladore et dolore magna aliqua.</p>
                                <a href="#servicos">Ler mais<BiSend className='icone'/></a>
                            </div>
                        </Tilt>
                        <Tilt className='cartao' options={{max: 40}}>
                            <div className="conteudo">
                                <h2>02</h2>
                                <h3>Cartão Dois</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ladore et dolore magna aliqua.</p>
                                <a href="#servicos">Ler mais<BiSend className='icone'/></a>
                            </div>
                        </Tilt>
                        <Tilt className='cartao' options={{max: 40}}>
                            <div className="conteudo">
                                <h2>03</h2>
                                <h3>Cartão Três</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ladore et dolore magna aliqua.</p>
                                <a href="#servicos">Ler mais<BiSend className='icone'/></a>
                            </div>
                        </Tilt>
                        <Tilt className='cartao' options={{max: 40}}>
                            <div className="conteudo">
                                <h2>04</h2>
                                <h3>Cartão Quatro</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ladore et dolore magna aliqua.</p>
                                <a href="#servicos">Ler mais<BiSend className='icone'/></a>
                            </div>
                        </Tilt>
                        <script src='jquery.js'></script>
                        <script src='tilt.jquery.js'></script>
                    </div>
                </div>
            </div>
        </section>
    );
}
