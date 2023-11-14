import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


import Paginainicial from './pages/paginainicial';
import Logincliente from './pages/logincliente';
import Login from './pages/login';
import Cadastrarprodutos from './pages/cadastrarprodutos';
import Produtos from './pages/produtos';
import Cadastrase from './pages/cadastrase';
import Comprar from './pages/comprar';
import Pagamento from './pages/pagamento';
import Perfil from './pages/perfil';
import Carrinho from './pages/carrinho';
import Loja from './pages/loja';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/cadastrarprodutos' element={<Cadastrarprodutos/>} />
        <Route path='/paginainicial' element={<Paginainicial/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/logincliente' element={<Logincliente/>} />
        <Route path='/produtos' element={<Produtos/>} />
        <Route path='/carrinho' element={<Carrinho/>} />
        <Route path='/cadastrase' element={<Cadastrase/>} />
        <Route path='/comprar' element={<Comprar/>} />
        <Route path='/pagamento' element={<Pagamento/>} />
        <Route path='/perfil' element={<Perfil/>} />
        <Route path='/loja' element={<Loja/>} />

        

        






        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

