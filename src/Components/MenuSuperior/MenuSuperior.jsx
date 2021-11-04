// Importação de módulos e bibliotecas
import './MenuSuperior.scss';
import Logo from "../../Assets/LogoTransparente.png";

export default function MenuSuperior({ menuAberto, setMenuAberto }) {
    return (
        <div className={'menuSuperior ' + (menuAberto && 'ativo')}>
            <div className='pacote'>
                <div className='esquerda'>
                    <img src={Logo} alt="Miguel Alves" width="150" height="50"/>
                </div>
                
                <div className='direita'>
                    <div className="hamburger" onClick={() => setMenuAberto(!menuAberto)}>
                        <span className='linha1'></span>
                        <span className='linha2'></span>
                        <span className='linha3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
