// Importação de módulos e bibliotecas
import './Rodape.scss'
import React from 'react'
import { BiUpArrowAlt } from "react-icons/bi";
import { SiWhatsapp, SiFacebook, SiGmail, SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";

export default function Rodape() {
    return (
        <section id='rodape' className='rodape'>
            <div className="rodape-vertical">
                <div className="rodape-horizontal">
                    <div className="siga-me">
                        <p>Siga-me</p>
                        <div className="redes-sociais">  
                            <a href="mailto:miguelalves1258@gmail.com" target="_blank"><SiGmail className='item'/></a>
                            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5562991416616" target="_blank"><SiWhatsapp className='item'/></a>
                            <a href="https://www.linkedin.com/in/miguel-acb9/" target="_blank"><SiLinkedin className='item'/></a>
                            <a href="https://github.com/Miguel-acb9/" target="_blank"><SiGithub className='item'/></a>
                            <a href="https://www.facebook.com/Miguel.Alves.Cordeiro.Braz" target="_blank"><SiFacebook className='item'/></a>
                            <a href="https://www.instagram.com/miguel_acb9/" target="_blank"><SiInstagram className='item'/></a>
                        </div>
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
