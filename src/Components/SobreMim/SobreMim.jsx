
import './SobreMim.scss';
import React from 'react';
import Tilt from 'react-tilt';
import { BiDownload } from "react-icons/bi";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython, SiCplusplus, SiGit, SiGithub, SiFigma } from "react-icons/si";


export default function SobreMim() {
    return (
        <section className='sobre-mim' id='sobre-mim'>
            <div className='sobre-mim_vertical'>
                
                <div className='sobre-mim_horizontal'>
                    <div className="titulo">
                        <h2>Sobre Mim</h2>
                        <h3>Minha Introdução</h3>
                    </div>
                    <div className="conteiner">
                        <div className='foto'>
                            <Tilt className='cartao' options={{max: 10, scale: 1}}></Tilt>
                        </div>
                        <div className='descricao'>
                            <p>
                                TEXTO TEXTO TEXTO TEXTO TEXTO 
                                TEXTO TEXTO TEXTO TEXTO TEXTO 
                                TEXTO TEXTO TEXTO TEXTO TEXTO 
                                TEXTO TEXTO TEXTO TEXTO TEXTO 
                                TEXTO TEXTO TEXTO TEXTO TEXTO 
                            </p>
                            <a href="">
                                Baixar CV
                                <BiDownload className='icone'/>
                            </a>
                            <div className="tecnologias">
                                <h4>Habilidades</h4>
                                <div className='lista'>
                                    <SiHtml5 className='icone'/>
                                    <SiCss3 className='icone'/>
                                    <SiJavascript className='icone'/>
                                    <SiTypescript className='icone'/>
                                    <SiReact className='icone'/>
                                    <SiNodedotjs className='icone'/>
                                    <SiPython className='icone'/>
                                    <SiCplusplus className='icone'/>
                                    <SiGit className='icone'/>
                                    <SiGithub className='icone'/>
                                    <SiFigma className='icone'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
