import './index.scss';
import man from '../../assets/images/man.png'
import perfil from '../../assets/images/skate.jpeg';
import logo from '../../assets/images/logo.png';
import skatista from '../../assets/images/skatista.png';
import { Link } from 'react-router-dom';
function App() {
    return (
      <div className="App">

        
        <div className="principal">
          
        <div className="metade-esquerda">
        
        </div>


        <div className="metade-direita">

        <div className="ah1">
          <div className="">

            <h1>Seja Bem Vindo</h1>

          </div>

          <div className="ap1">
            <p className="p1">
              Aqui temos todo tipo de variedade para o seu skate! Somos uma loja completa para você iniciante, amador e profissional, aqui você encontrará todo tipo de equipamento: Shapes, lixas, skates completos, longboarding, rolamentos, etc.
            </p>
          
            <p className="p2">Também temos uma variedade de roupas para você conferir! Venha conhecer nossos produtos, todos com total segurança e principalmente qualidade</p>
          </div>





<div className="login">
            
               
                 <Link to="/logincliente"><span className="a1">FAÇA SEU LOGINﾠ</span></Link>
             
             
             
               
               <Link to="/cadastrase"><span className="a2">OU CADASTRE-SE</span></Link>
           
             
            
           
</div>


        </div>



        </div>
      </div>
      

      

         



        
  
        
  
      </div>
      
  
    );
  }
  

  
  export default App;
  