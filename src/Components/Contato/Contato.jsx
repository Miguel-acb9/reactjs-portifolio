// Importação de módulos e bibliotecas
import './Contato.scss';
import { BiSend } from 'react-icons/bi';
import { SiWhatsapp, SiGmail, SiGooglemaps } from 'react-icons/si';

export default function Contato() {
    return (
        <section id='contato' className='contato'>
            <div className='contato_vertical'>
                <div className="contato_horizontal">
                    <div className="titulo">
                        <h2>Contato</h2>
                        <h3>Me conte sua ideia</h3>
                    </div>
                    <div className='conteudo'>    
                        <div className='contato-info'>
                            <div className="contatos">
                                <div className="area-icone"><SiWhatsapp /></div>
                                <div className="area-texto">
                                    <h3>Telefone</h3>
                                    <span>(62)9.9141-6616</span>
                                </div>
                            </div>
                            <div className="contatos">
                                <div className="area-icone"><SiGmail /></div>
                                <div className="area-texto">
                                    <h3>E-mail</h3>
                                    <span>miguelalves1258@gmail.com</span>
                                </div>
                            </div>
                            <div className="contatos">
                                <div className="area-icone"><SiGooglemaps /></div>
                                <div className="area-texto">
                                    <h3>Localização</h3>
                                    <span>Goiânia, Goiás, Brasil, 74265-240</span>
                                </div>
                            </div>
                        </div>
                        <div className='formulario'>
                            <form action="#">
                                <div className="nome">
                                    <input name='nome' type='text' placeholder='Nome Completo'/>
                                </div>
                                <div className="email-telefone">
                                    <input name='email' type='text' placeholder='E-mail'/>
                                    <input name='telefone' type='text' placeholder='Telefone'/>
                                </div>
                                <div className="assunto">
                                    <select required>
                                        <option select disable hidden>Assunto</option>
                                        <option value='emprego'>Emprego</option>
                                        <option value='estagio'>Estágio</option>
                                        <option value='freelance'>Freelance</option>
                                        <option value='outro'>Outro</option>
                                    </select>
                                </div>
                                <div className="mensagem">
                                    <textarea name="" id="" cols="0" rows="8"></textarea>
                                </div>
                                <a href="">
                                    Enviar
                                    <BiSend className='icone'/>
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
