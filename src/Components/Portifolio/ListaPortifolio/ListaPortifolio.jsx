import './ListaPortifolio.scss';

export default function ListaPortifolio({ titulo, ativo, setSelecionado }) {
    return (
        <li className={ativo ? 'listaPortifolio ativo' : 'portifolioLista'}>
            {titulo}
        </li>
    );
}