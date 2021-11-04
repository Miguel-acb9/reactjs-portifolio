// Importação de módulos e bibliotecas
import './Rodape.scss'
import Tilt from 'react-tilt';
import { BiUpArrowAlt } from 'react-icons/bi';
import { SiInstagram, SiLinkedin, SiGithub } from 'react-icons/si';

export default function Rodape() {
    return (
        <section id='rodape' className='rodape'>
            <div className='rodape-vertical'>
                <div className='rodape-horizontal'>
                    <div className='siga-me'>
                        <p>Siga-me</p>
                        <div className='redes-sociais'>  
                            <a href='https://www.linkedin.com/in/miguel-acb9/' target='_blank' rel="noreferrer"><SiLinkedin className='item'/></a>
                            <a href='https://github.com/Miguel-acb9/' target='_blank' rel="noreferrer"><SiGithub className='item'/></a>
                            <a href='https://www.instagram.com/miguel_acb9/' target='_blank' rel="noreferrer"><SiInstagram className='item'/></a>
                        </div>
                    </div>
                    <div className="logo">
                        <Tilt options={{max: 40}}><img src='http://localhost:3000/Assets/LogoBrancaTransparente.png' alt="Miguel Alves" width="150" height="50"/></Tilt>
                    </div>
                    <div className="btn-topo">
                        <a href='#intro'><BiUpArrowAlt className='icone'/></a>
                    </div>
                </div>
                <div className="dev">Desenvolvido por Miguel Alves</div>
            </div>
        </section>
    );
}
