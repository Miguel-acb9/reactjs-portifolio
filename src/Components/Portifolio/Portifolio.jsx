// Importação de módulos e bibliotecas
import './Portifolio.scss';
import { useState } from 'react';
import ListaPortifolio from './ListaPortifolio/ListaPortifolio';

export default function Portifolio() {
    const [ selecionado, setSelecionado ] = useState('destaques');
    const lista = [
        {
            id: 'destaques',
            titulo: 'Destaques'
        },
        {
            id: 'web',
            titulo: 'Web App'
        },
        {
            id: 'mobile',
            titulo: 'Mobile App'
        },
        {
            id: 'design',
            titulo: 'Design'
        },
    ];
    
    return (
        <div className='portifolio' id='portifolio'>
            <h1>Portifólio</h1>
            <ul>
                {lista.map(item => (
                    <ListaPortifolio 
                        titulo={item.titulo} 
                        ativo={selecionado === lista.id}
                        setSelecionado={setSelecionado}
                    />
                ))}
            </ul>
            <div className="conteiner">
                <div className="item">
                    <img src="" alt="" />
                    <h3>111</h3>
                </div>
                <div className="item">
                    <img src="../../public/Assets/img_500x500.png" alt="" />
                    <h3>222</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>333</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>444</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>555</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>666</h3>
                </div>
            </div>
        </div>
    )
}
// Featured, web app, mobile app, desing, branding 