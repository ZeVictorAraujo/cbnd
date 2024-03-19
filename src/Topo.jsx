// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import Slideshow from './Slideshow';

function Topo() {
  
  const [secaoAtual, setSecaoAtual] = useState('inicio');
  const [menuAberto, setMenuAberto] = useState(false);

  const cliqueSecao = (secao) => {
    setSecaoAtual(secao);
    scrollToSection(secao);
  };

  const scrollToSection = (secao) => {
    const element = document.getElementById(secao);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    // eslint-disable-next-line no-undef
    setMenuAberto(!menuAberto);
  };

    return (

      <header>
      <nav className={menuAberto ? 'menu-aberto' : ''}>
      <div className={`menu ${menuAberto ? 'menu-aberto' : ''}`}>
        <button onClick={() => cliqueSecao('inicio') } className='botao-menu'>Início</button>
        <button onClick={() => cliqueSecao('servicos')} className='botao-menu'>Serviços</button>
        <button onClick={() => cliqueSecao('contato')} className='botao-menu'>Contato</button>
      </div>
      <div className="hamburguer" onClick={toggleMenu}>
          <div className={`linha ${menuAberto ? 'aberto' : ''}`}></div>
          <div className={`linha ${menuAberto ? 'aberto' : ''}`}></div>
          <div className={`linha ${menuAberto ? 'aberto' : ''}`}></div>
        </div>
      </nav>

      <Slideshow />

      <div>
        {secaoAtual === 'inicio' && (
          <div className='secaoinicio' id="inicio">
            <div className="biografia">
              <div className="texto-biografia">
                <h1>Todo cuidado com a sua beleza</h1>
                  <p>Mais de vinte anos de experiência, cuidando, renovando e restaurando sua auto estima.</p>
                  <p><strong>Fisioterapeuta e Cabeleleira Neuza Dantas</strong></p>
        </div>
      <div className="imagem-biografia">
            <img src="neuza2.png" alt="Neuza Dantas" />
    </div>
  </div>
          </div>
        )}

        {secaoAtual === 'servicos' && (
          <div className='secaoservicos' id="servicos">
            <div className='texto-servicos'>
              <h1>Nossos serviços: </h1>
              <ul>
                <li>Massagem terapêutica</li>
                <li>Drenagem Linfática</li>
                <li>Limpeza de pele</li>
                <li>Escova, corte e cuidados com os cabelos</li>
                <li>Manicure, pedicure e design de unhas</li>
              </ul>
            </div>
            <div className='imagem-servicos'>
            <img src="neuza3.png" alt="Neuza Dantas" />
            </div>
          </div>
        )}
        {secaoAtual === 'contato' && (
          <div className="secaocontato" id="contato">
            <div className="conteudo-contato">
              <br/>
              <h2>Entre em contato e agende já seu horário: </h2>
            </div>
            <div className="imagens-contato">
              <a href="https://wa.me/5575999604987" target="_blank"><img src="whatsapp.png" /></a>
              <a href="https://www.instagram.com/neuzadantascenter/" target="_blank"><img src="instagram.png"/></a>
              <a href="https://www.google.com/maps/place/CENTRO+DE+BELEZA+NEUZA+DANTAS/@-12.137419,-38.4087083,17z/data=!4m6!3m5!1s0x716bc4eb3c4f093:0xcb28ae967152425b!8m2!3d-12.1374439!4d-38.4086338!16s%2Fg%2F11g9ntcnlt?entry=ttu" target="_blank"><img src="marcador.png"/></a>
            </div>
          </div>
        )}
      </div>

      </header>


    );
  }

export default Topo;
