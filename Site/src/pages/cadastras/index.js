import './index.scss';
import parede from '../../assets/images/parede.png';
import logo from '../../assets/images/logo.png';
import Skateb from '../../assets/images/Skateb.jpg'
import { Link } from 'react-router-dom';


function App() {
    return (
      <div className="App">



        <div className='quadroo'>


        <div className="container-formulario">

          <div className="metade-esquerdaaaa">
            <img src={Skateb} alt="Skateb" className="Skateb" />
          </div>

          
          <div className="metade-direitaaa">

            <div className="formulariooo">
              
              <h1 className="titulo-formulariooo">Cadastro</h1>
              <br />
              <br />
              <input type="texto" placeholder="Nome Completo" className="entrada-formulario" />
              <input type="texto" placeholder="CPF" className="entrada-formulario" />
              <input type="texto" placeholder="Data de Nascimento" className="entrada-formulario" />
              <input type="texto" placeholder="Email" className="entrada-formulario" />
              <input type="password" placeholder="Senha" className="entrada-formulario" />
              <br />
              <br />
              <button className="botao-formulario">Cadastrar</button>
              <div className="link-personalizado">
                
                <Link to="/logincliente"><span className="link-personalizado">Já tem uma conta? Faça o login aquiﾠ</span></Link>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
        
      </div>
        

    );
  }
  
  export default App;
