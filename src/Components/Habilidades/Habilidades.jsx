// Importação de módulos e bibliotecas
import './Habilidades.scss';
import Tilt from 'react-tilt';

export default function Depoimentos() {
    return (
        <section id='habilidades' className='habilidades'>
            <div className='habilidades_vertical'>
                <div className="habilidades_horizontal">
                    <div className="titulo">
                        <h2>Habilidades</h2>
                        <h3>Me conte sua ideia</h3>
                    </div>
                    <div className='conteiner'>
                        <Tilt className='cartao' options={{max: 25}}>
                            <div className="conteudo">
                                <h2>01</h2>
                                <h3>Cartão Um</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ladore et dolore magna aliqua.</p>
                                <a href="#">Ler mais</a>
                            </div>
                        </Tilt>
                        <Tilt className='cartao'>
                            <div className="conteudo">
                                <h2>02</h2>
                                <h3>Cartão Dois</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ladore et dolore magna aliqua.</p>
                                <a href="#">Ler mais</a>
                            </div>
                        </Tilt>
                        <Tilt className='cartao'>
                            <div className="conteudo">
                                <h2>03</h2>
                                <h3>Cartão Três</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ladore et dolore magna aliqua.</p>
                                <a href="#">Ler mais</a>
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
