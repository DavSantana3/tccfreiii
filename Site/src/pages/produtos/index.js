


import React, { useState } from 'react';
import './index.scss';
import logo from '../../assets/images/logo.png';
import banner from '../../assets/images/banner.png';
import 'boxicons/css/boxicons.min.css';


import lg01 from '../../assets/images/lg01.png';
import lg02 from '../../assets/images/lg02.png';
import lg03 from '../../assets/images/lg03.png';
import lg04 from '../../assets/images/lg04.png';
import lg05 from '../../assets/images/lg05.png';
import lg06 from '../../assets/images/lg06.png';
import lg07 from "../../assets/images/lg07.png";
import lg08 from "../../assets/images/lg08.png";
import lg09 from "../../assets/images/lg09.png";
import lg10 from "../../assets/images/lg10.png";





import feminino from '../../assets/images/feminino.png';
import masculino from '../../assets/images/masculino.png';
import infantil from '../../assets/images/infantil.png';
import { Link } from 'react-router-dom';
import sk5 from '../../assets/images/sk5.png';
import sk7 from '../../assets/images/sk7.png';
import sk8 from '../../assets/images/sk8.png';
import sk9 from '../../assets/images/sk9.png';
import sk02 from '../../assets/images/sk02.png';
import sk03 from '../../assets/images/sk03.png';
import sk04 from '../../assets/images/sk04.png';
import sk06 from '../../assets/images/sk04.png';
import sk2 from '../../assets/images/sk2.png';
import sk6 from '../../assets/images/sk6.png';
import sk10 from '../../assets/images/sk10.png';
import sk20 from '../../assets/images/sk20.png';
import sk21 from '../../assets/images/sk21.png';
import sk22 from '../../assets/images/sk22.png';


function App() {
  const produtos = [
    { imagem: sk8, nome: 'Produto 7', preco: 'R$ 230.90', classificacao: 5 },
    { imagem: sk9, nome: 'Produto 9', preco: 'R$ 80.99', classificacao: 4 },
    { imagem: sk5, nome: 'Produto 4', preco: 'R$ 120.99', classificacao: 4 },
    { imagem: sk02, nome: 'Produto 1', preco: 'R$ 79.99', classificacao: 4 },
    { imagem: sk03, nome: 'Produto 2', preco: 'R$ 89.99', classificacao: 5 },
    { imagem: sk04, nome: 'Skate Completo Ahead Tie Dye Cloud', preco: 'R$ 269.99', classificacao: 5 },
   
    { imagem: sk7, nome: 'Produto 2', preco: 'R$ 89.99', classificacao: 5 },

    { imagem: sk10, nome: 'Produto 2', preco: 'R$ 89.99', classificacao: 5 },
    { imagem: sk20, nome: 'Produto 2', preco: 'R$ 89.99', classificacao: 5 },
    { imagem: sk21, nome: 'Produto 2', preco: 'R$ 89.99', classificacao: 5 },
    { imagem: sk22, nome: 'Produto 2', preco: 'R$ 89.99', classificacao: 5 },







  ];

  const produtosLongboard = [
    { imagem: lg01, nome: 'Longboard 1', preco: 'R$ 199.99', classificacao: 5 },
    { imagem: lg02, nome: 'Longboard 2', preco: 'R$ 189.99', classificacao: 5 },
    { imagem: lg03, nome: 'Longboard 3', preco: 'R$ 179.99', classificacao: 3 },
    { imagem: lg04, nome: 'Longboard 4', preco: 'R$ 179.99', classificacao: 4 },
    { imagem: lg05, nome: 'Longboard 5', preco: 'R$ 179.99', classificacao: 3 },
    { imagem: lg06, nome: 'Longboard 6', preco: 'R$ 179.99', classificacao: 4 },
    { imagem: lg07, nome: 'Longboard 7', preco: 'R$ 179.99', classificacao: 3 },
    { imagem: lg08, nome: 'Longboard 8', preco: 'R$ 179.99', classificacao: 5 },
    { imagem: lg09, nome: 'Longboard 9', preco: 'R$ 179.99', classificacao: 4 },
    { imagem: lg10, nome: 'Longboard 10', preco: 'R$ 179.99', classificacao: 4 },
   


  ];

  const [indiceAtual, setIndiceAtual] = useState(0);
  const [indiceAtualLongboard, setIndiceAtualLongboard] = useState(0);

  const irParaAnterior = (produtosArray, setIndiceAtual) => {
    setIndiceAtual((indiceAnterior) =>
      indiceAnterior === 0 ? produtosArray.length - 1 : indiceAnterior - 1
    );
  };

  const irParaProximo = (produtosArray, setIndiceAtual) => {
    setIndiceAtual((indiceAnterior) =>
      indiceAnterior === produtosArray.length - 1 ? 0 : indiceAnterior + 1
    );
  };

  const irParaAnteriorLongboard = () => {
    irParaAnterior(produtosLongboard, setIndiceAtualLongboard);
  };

  const irParaProximoLongboard = () => {
    irParaProximo(produtosLongboard, setIndiceAtualLongboard);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const [favoritos, setFavoritos] = useState({});

  const toggleFavorito = (indice) => {
    setFavoritos((prevFavoritos) => {
      const novoFavoritos = { ...prevFavoritos };
      novoFavoritos[indice] = !novoFavoritos[indice];
      return novoFavoritos;
    });
  };

  return (    <div className="App">
      <header className="Cabecalhooo">
        <img src={logo} alt="Logo" className="Logo" />
        <div className="conteiner-de-busca">
          <div className="search-container">
            <i className="bx bx-search search-icon"></i>
            <input type="text" placeholder="Pesquisar" />
          </div>
        </div>
        <div className='grupo-de-icones'>
        <Link to="/perfil"><i className='bx bx-user'></i></Link>
          <a href="#"><i className='bx bx-cart'></i></a>
          <Link to="/logincliente"><span className="EntrarCadastrar">ENTRAR</span></Link>
          <Link to="/cadastrase"><span className="EntrarCadastrar">CADASTRAR</span></Link>
          </div>
      </header>
      <div className="banner">
        <img src={banner} alt="Banner" className="Banner" />
      </div>
      <header className="faixa">
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
        </div>
        <nav className={`menu ${menuOpen ? 'active' : ''}`}>
          <ul className="opcoess">
            <li>
            <Link to="/1" className="ItemNav"> SKATE</Link>
            </li>
            <li>
            <Link to="/1" className="ItemNav">LONGBOARD</Link>
            </li>
            <li>
            <Link to="/1" className="ItemNav">TÊNIS</Link>
            </li>
            <li>
            <Link to="/1" className="ItemNav">ACESSÓRIO</Link>
            </li>
            <li>
            <Link to="/1" className="ItemNav">PROTEÇÃO</Link>
            </li>
            <li>
            <Link to="/1" className="ItemNav">PROMOÇÃO</Link>
            </li>
            <li>
              <a href="#">ACESSÓRIO</a>
            </li>
            <li>
              <a href="#">PROTEÇÃO</a>
            </li>
            <li>
              <a href="#">PROMOÇÃO</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container-de-produtos">
        <h1>Skate</h1>
        <button className="carousel-button prev" onClick={() => irParaAnterior(produtos, setIndiceAtual)}>
          <i className="bx bx-left-arrow"></i>
        </button>
        <div className="carousel">
          {produtos.map((produto, index) => (
            <div
              key={index}
              className={`produto ${index === indiceAtual ? 'ativo' : ''}`}
            >
              <img src={produto.imagem} alt={produto.nome} className="ImagemProduto" />
              <h2>{produto.nome}</h2>
              <p>{produto.preco}</p>
              <div className="classificacao">
                {[...Array(produto.classificacao)].map((_, i) => (
                  <i key={i} className="bx bxs-star"></i>
                ))}
              </div>
              <i
                className={`bx ${favoritos[index] ? 'bxs-heart' : 'bx-heart'} icone-coracao`}
                onClick={() => toggleFavorito(index)}
              ></i>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={() => irParaProximo(produtos, setIndiceAtual)}>
          <i className="bx bx-right-arrow"></i>
        </button>
      </div>
      <div className="container-de-produtos">
        <h1>Longboard</h1>
        <button className="carousel-button prev" onClick={irParaAnteriorLongboard}>
          <i className="bx bx-left-arrow"></i>
        </button>
        <div className="carousel">
          {produtosLongboard.map((produto, index) => (
            <div
              key={index}
              className={`produto ${index === indiceAtualLongboard ? 'ativo' : ''}`}
            >
              <img src={produto.imagem} alt={produto.nome} className="ImagemProduto" />
              <h2>{produto.nome}</h2>
              <p>{produto.preco}</p>
              <div className="classificacao">
                {[...Array(produto.classificacao)].map((_, i) => (
                  <i key={i} className="bx bxs-star"></i>
                ))}
              </div>
              <i
                className={`bx ${favoritos[index] ? 'bxs-heart' : 'bx-heart'} icone-coracao`}
                onClick={() => toggleFavorito(index)}
              ></i>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={irParaProximoLongboard}>
          <i className="bx bx-right-arrow"></i>
        </button>
      </div>
     
    </div>
  );
}

export default App;
