// Importação de módulos e bibliotecas
import './MenuSuperior.scss';


export default function MenuSuperior({ menuAberto, setMenuAberto }) {
    return (
        <div className={'menuSuperior ' + (menuAberto && 'ativo')}>
            <div className='pacote'>
                <div className='esquerda'>
                    <a href="#intro">
                        <img src='http://localhost:3000/Assets/LogoPretaTransparente.png' alt="Miguel Alves"/>
                    </a>
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
