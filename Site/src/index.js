import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


import Paginainicial from './pages/paginainicial';
import Login from './pages/login';
import Cadastrarprodutos from './pages/cadastrarprodutos';
import Produtos from './pages/produtos';
import Comprar from './pages/comprar';
import Pagamento from './pages/pagamento';
import Perfil from './pages/perfil';
import Carrinho from './pages/carrinho';
import Loja from './pages/loja';
import Bemvindo from './pages/bemvindo';
import Logincli from './pages/logincli';
import Cadastras from './pages/cadastras';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Bemvindo/>} />
        <Route path='/logincli' element={<Logincli/>}/>
        <Route path='/cadastras'element={<Cadastras/>}/>
        <Route path='/login' element={<Login/>} />


        <Route path='/cadastrarprodutos' element={<Cadastrarprodutos/>} />
        <Route path='/paginainicial' element={<Paginainicial/>} />
        
        <Route path='/produtos' element={<Produtos/>} />
        <Route path='/carrinho' element={<Carrinho/>} />
        <Route path='/comprar' element={<Comprar/>} />
        <Route path='/pagamento' element={<Pagamento/>} />
        <Route path='/perfil' element={<Perfil/>} />
        <Route path='/loja' element={<Loja/>} />


        

        






        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

