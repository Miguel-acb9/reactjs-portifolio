// Importação de módulos e bibliotecas
import './App.scss';
import { useState } from 'react';
import Menu from './Components/Menu/Menu';
import Intro from './Components/Intro/Intro';
import Contato from './Components/Contato/Contato';
import Trabalhos from './Components/Trabalhos/Trabalhos';
import Portifolio from './Components/Portifolio/Portifolio';
import Depoimentos from './Components/Depoimentos/Depoimentos';
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
                <Portifolio/>
                <Trabalhos/>
                <Depoimentos/>
                <Contato/>
            </div>
        </div>
    );
}

export default App;
