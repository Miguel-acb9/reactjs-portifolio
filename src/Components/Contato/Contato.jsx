// Importação de módulos e bibliotecas
import './Contato.scss';
import { BiSend } from "react-icons/bi";
export default function Contato() {
    return (
        <div className='contato' id='contato'>
            <h2>Contate-Me</h2>
            <h3>Fale Comigo</h3>
            <div className="conteudo">
                <div className="esquerda">

                </div>
                <div className="direita">
                    <form action="">
                        <label htmlFor="">Nome</label>
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
    )
}
