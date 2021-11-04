// Importação de módulos e bibliotecas
import './Portifolio.scss';
import Tilt from 'react-tilt';
import { BiLeftArrow, BiRightArrow, BiSend, BiMoney } from "react-icons/bi";
import { useRef, useState, useEffect } from 'react';


export default function Portifolio() {
    
    const carrossel = useRef(null);
    const [ dados, setDados ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/Static/ListaPortifolio.json')
            .then((response) => response.json())
            .then(setDados);
    }, [])
    
    const handleClickProximo = (evento) => {
        evento.preventDefault();
        carrossel.current.scrollLeft += carrossel.current.offsetWidth;
    }

    const handleClickAnterior = (evento) => {
        evento.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
    }


    if(!dados || !dados.length) { return null; }
    
    return (
        <section id='portifolio' className='portifolio'>
            <div className='portifolio_vertical'>
                <div className="portifolio_horizontal">
                    <div className="titulo">
                        <h2>Portifólio</h2>
                        <h3>Trabalhos Recentes</h3>
                    </div>
                    <div className='conteiner'>
                        <div className="carrossel">
                        <button className='butao-anterior' onClick={handleClickAnterior}><BiLeftArrow /></button>
                            <div className="conteudo" ref={carrossel}>
                                {dados.map((item) => {
                                    const { id, nomeProjeto, textoProjeto, imagem } = item;
                                    
                                    return (
                                        <div className="elemento" key={id}>
                                            <div className="imagem">
                                                <img src={imagem} alt="" />
                                            </div>
                                            <div className="texto">
                                                <h3>{ nomeProjeto }</h3>
                                                <p>{ textoProjeto }</p>
                                                <a href='#contato'>
                                                    Visualizar
                                                    <BiSend className='icone'/>
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <button className='butao-proximo' onClick={handleClickProximo}><BiRightArrow /></button>
                        </div>
                        <div className="banner">
                            <Tilt className='cartao' options={{max: 10, scale: 1}}>
                                <div className="conteudo">
                                    <BiMoney className='icone-fundo'/>
                                    <h3>Você tem um novo projeto</h3>
                                    <p>Me conte sua ideia agora e ganhe 30% de desconto em seu novo projeto.</p>
                                    <a href='#contato'>
                                        Contate-me
                                        <BiSend className='icone'/>
                                    </a>
                                </div>
                            </Tilt>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
