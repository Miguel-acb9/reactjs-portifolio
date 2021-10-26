import React from 'react';
import './SobreMim.scss';

export default function SobreMim() {
    return (
        <section className='sobre-mim' id='sobre-mim'>
            <div className='sobre-mim-vertical'>
                <h2>Sobre Mim</h2>
                <h3>Minha Introdução</h3>
                <div className='sobre-mim-horizontal'>
                    <div className='foto'>
                        <p>
                            FOTO FOTO FOTO FOTO FOTO <br />
                            FOTO FOTO FOTO FOTO FOTO <br />
                            FOTO FOTO FOTO FOTO FOTO <br />
                            FOTO FOTO FOTO FOTO FOTO <br />
                            FOTO FOTO FOTO FOTO FOTO <br />
                        </p>
                    </div>
                    <div className='descricao'>
                        <p>
                            TEXTO TEXTO TEXTO TEXTO TEXTO <br />
                            TEXTO TEXTO TEXTO TEXTO TEXTO <br />
                            TEXTO TEXTO TEXTO TEXTO TEXTO <br />
                            TEXTO TEXTO TEXTO TEXTO TEXTO <br />
                            TEXTO TEXTO TEXTO TEXTO TEXTO <br />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
