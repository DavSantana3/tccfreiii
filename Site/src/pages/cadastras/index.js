import './index.scss'
import { Link } from 'react-router-dom';

function Cadastras() {
  return (
    <div className="Appcadastras">

<div className='principal'>

  <div className='quadrado'>

    <div className='img'>
    
    </div>

<div className='meio'>
    <div className='login'>
    <div className="formulario-loginn">
              
    <h1 className="titulo-formulariooo">Cadastro</h1>
            
              <input type="texto" placeholder="Nome Completo" className="entrada-formulario" />
              <input type="texto" placeholder="CPF" className="entrada-formulario" />
              <input type="texto" placeholder="Data de Nascimento" className="entrada-formulario" />
              <input type="texto" placeholder="Email" className="entrada-formulario" />
              <input type="password" placeholder="Senha" className="entrada-formulario" />
              <br />
              <button className="botao-formulario">Cadastrar</button>
              <div className="link-personalizado">
                
                <Link to="/logincli"><span className="link-personalizado">Já tem uma conta? Faça o login aquiﾠ</span></Link>
        </div>



        </div>
</div>        

    </div>

  </div>

</div>
      

      
    </div>
  );
}

export default Cadastras;