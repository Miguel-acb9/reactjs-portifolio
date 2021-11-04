// Importação de módulos e bibliotecas
import './App.scss';
import { useState } from 'react';
import Menu from './Components/Menu/Menu';
import Intro from './Components/Intro/Intro';
import Rodape from './Components/Rodape/Rodape';
import Contato from './Components/Contato/Contato';
import SobreMim from './Components/SobreMim/SobreMim';
import Servicos from './Components/Servicos/Servicos';
import Portifolio from './Components/Portifolio/Portifolio';
import MenuSuperior from './Components/MenuSuperior/MenuSuperior';

function App() {
    // Declaração de Estados
    const [ menuAberto, setMenuAberto ] = useState(false);

    return (
        <div className="App">
            <MenuSuperior menuAberto={menuAberto} setMenuAberto={setMenuAberto}/>
            <Menu menuAberto={menuAberto} setMenuAberto={setMenuAberto}/>
            <div className="secoes">
                <Intro/>
                <SobreMim/>
                <Servicos/>
                <Portifolio/>
                <Contato/>
                <footer><Rodape/></footer> 
            </div>
        </div>
    );
}

export default App;

/*

Me sinto tão Sol
Sem ré e sem só, eu brilho
Me sinto tão Sol
Sem ré e sem só, eu ilumino


*/