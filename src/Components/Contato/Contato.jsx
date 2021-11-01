// Importação de módulos e bibliotecas
import './Contato.scss';
import { BiSend } from "react-icons/bi";
export default function Contato() {
    return (
        <section className='contato' id='contato'>
            <div className='contato-vertical'>
                <h2>Contato</h2>
                <h3>Me conte sua ideia</h3>
                <div className='contato-horizontal'>
                    <div className='contato-info'>
                        <p>
                            FOTO FOTO FOTO FOTO FOTO <br />
                            FOTO FOTO FOTO FOTO FOTO <br />
                            FOTO FOTO FOTO FOTO FOTO <br />
                            FOTO FOTO FOTO FOTO FOTO <br />
                            FOTO FOTO FOTO FOTO FOTO <br />
                        </p>
                    </div>
                    <div className='formulario'>
                        <form action="">
                            <label htmlFor="">Nome Completo</label>
                            <input name='nome' type='text'/>

                            <label htmlFor="">E-mail</label>
                            <input name='email' type='text'/>

                            <label htmlFor="">Assunto</label>
                            <select name="" id="">
                                <option select disable>Assunto</option>
                                <option value="emprego">Emprego</option>
                                <option value="estagio">Estágio</option>
                                <option value="freelance">Freelance</option>
                                <option value="outro">Outro</option>
                            </select>

                            <label htmlFor="">Mensagem</label>
                            <textarea name="" id="" cols="0" rows="10">

                            </textarea>
                            <a href="">
                                Enviar
                                <BiSend className='icone'/>
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
