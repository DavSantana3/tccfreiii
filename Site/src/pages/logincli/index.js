

import '../logincli/index.scss'
import logo from '../../assets/images/logo.png';
import parede from '../../assets/images/parede.png';
import insta from '../../assets/images/insta.png';
import face from '../../assets/images/face.png';
import google from '../../assets/images/google.png';
import skat from '../../assets/images/Skat.jpg'
import skateb from '../../assets/images/Skateb.jpg'
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">

<div className='principal'>

  <div className='quadrado'>

    <div className='img'>
    
    </div>

<div className='meio'>
    <div className='login'>
    <div className="formulario-loginn">
      <h1>Login</h1>
      <br />
      <br />
        <input type="textoo" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <br />
        <br />


        <button>Entrar</button>
        <br />
    

        <div className="custom-link">
         <a href='/cadastras '>Cadastra-se aqui</a>
        </div>

      

        </div>
</div>        

    </div>
  <div className="escondido">
         <a href='./login'>So adm</a>
        </div>
  </div>

</div>
      

      
    </div>
  );
}

export default App;
