// import logo from './logo.svg';
// import whatsapp from './whatsappIcon.png';
import './App.css';
import { object } from './object';
import whatsLogo from './assets/WhatsApp.png';
// import faceLogo from './assets/Facebook.png';
// import instaLogo from './assets/Instagram.png';
import { createBrowserRouter, useNavigate } from 'react-router-dom';
import Stores from './components/Stores';

export const router = createBrowserRouter([
  {
    path: '/almacenes',
    element: <Stores/>
  },
  {
    path: '/',
    element: <App/>
  },
]);

function App() {
  let colour = (color) => {return {color}}
  let o = object;
  let pot = o.Papa
  let bat = o.Batata
  let ceb = o.Cebolla
  let zan = o.Zanahoria
  let zap = o.Anco
  let tom = o['Tomate perita']
  let ban = o.Banana
  let man = o.Manzana
  let nar = o.Naranja
  let fru = o.Frutilla
  let lim = o.Limón
  // let red = colour('red')
  let orange = colour('orange')
  // let yellow = colour('yellow')
  // let orangered = colour('orangered')
  // let wheat = colour('wheat')
  let yellowgreen = colour('yellowgreen')
  return (
    <div className="App" style={{backgroundColor: 'black'}}>
      <div style={{color:'gray'}}>
    Lista de precios <br/>
    Última actualización: 17 de febrero de 2024
    <br/>
    Contacto:
    </div>
    <br/>
    <div>
                {/* <div className='flex center'> */}
                    <a href='https://wa.me/+541158774985' title='Enviar un mensaje de WhatsApp' target='_blank' rel="noreferrer">
                        <img src={whatsLogo} style={{height: '64px', margin: 'auto 16px'}} alt=''/>
                    </a>
                
                    {/* <a href='https://www.facebook.com/profile.php?id=100095438713871' title='Visitar página de facebook' target='_blank' rel="noreferrer">
                        <img src={faceLogo} style={{height: '64px', margin: 'auto 16px'}} alt=''/>
                    </a>
                
                    <a href='https://www.instagram.com/almacenstack/' title='Visitar página de instagram' target='_blank' rel="noreferrer">
                        <img src={instaLogo} style={{height: '64px', margin: 'auto 16px'}} alt=''/>
                    </a> */}
                {/* </div> */}
      {/* <img src={whatsapp} href='' style={{width: '50px', borderRadius: '8px'}}/> */}
    </div>
    <br/> <div style={{display: 'block', width: '200px', margin: 'auto', color: 'yellow', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
      Papa
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      
      <div>bolsa </div>
      <div>{pot.bolsa}</div> </div>

    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      
      <div>1/2 bolsa </div>
      <div>{pot['1/2 bolsa']}</div> </div>

    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      
      <div>1/4 bolsa </div>
      <div>{pot['1/4 bolsa']}</div> </div>

    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      
      <div>por kg </div>
      <div>{pot['por kg']}</div> </div>

    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      
      <div>por 2kg </div>
      <div>{pot['por 2kg']}</div> </div>

    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      
      <div>por kg oferta </div>
      <div>{pot['por kg oferta']}</div> </div>

   <br/></div>
   <br/>  <div style={{display: 'block', width: '200px', margin: 'auto', color: 'pink', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
    Batata
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>bolsa </div><div>{bat.bolsa}</div> </div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/2 bolsa </div><div>{bat['1/2 bolsa']}</div> </div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/4 bolsa </div><div>{bat['1/4 bolsa']}</div> </div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div><div>{bat['por kg']}</div> </div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div><div>{bat['por 2kg']}</div> </div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div><div>{bat['por kg oferta']}</div> </div>
  <br/></div>
  <br/>  <div style={{display: 'block', width: '200px', margin: 'auto', color: 'wheat', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
    Cebolla
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>bolsa </div><div>{ceb.bolsa}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/2 bolsa </div><div>{ceb['1/2 bolsa']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/4 bolsa </div><div>{ceb['1/4 bolsa']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div><div>{ceb['por kg']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div><div>{ceb['por 2kg']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div><div>{ceb['por kg oferta']}</div></div>
  <br/></div>
  <br/>  <div style={{display: 'block', width: '200px', margin: 'auto', color: 'orangered', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
    Zanahoria
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>bolsa </div> <div>{zan.bolsa}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/2 bolsa </div> <div>{zan['1/2 bolsa']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/4 bolsa </div> <div>{zan['1/4 bolsa']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div> <div>{zan['por kg']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div> <div>{zan['por 2kg']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div> <div>{zan['por kg oferta']}</div></div>
  <br/></div>
  <br/>  <div style={{display: 'block', width: '200px', margin: 'auto', color: 'orange', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
    Anco
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>bolsa </div> <div>{zap.bolsa}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/2 bolsa </div> <div>{zap['1/2 bolsa']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/4 bolsa </div> <div>{zap['1/4 bolsa']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div> <div>{zap['por kg']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div> <div>{zap['por 2kg']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div> <div>{zap['por kg oferta']}</div></div>
  <br/></div>
  <br/>  
  <div style={{display: 'block', width: '200px', margin: 'auto', color: 'red', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
    Tomate perita
    {/* <div style={{display: 'flex', justifyContent: 'space-between'}}><div>cajón </div> <div> {tom.bolsa} </div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/2 cajón </div> <div> {tom['1/2 bolsa']} </div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/4 cajón </div> <div> {tom['1/4 bolsa']} </div></div> */}
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div> <div> {tom['por kg']} </div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div> <div> {tom['por 2kg']} </div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div> <div> {tom['por kg oferta']} </div></div>
  </div>
  <br/>  
  <div style={{display: 'block', width: '200px', margin: 'auto', color: 'green', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
    Acelga
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>atado </div> <div>{o.Acelga['por atado']}</div></div>
  </div>
  <br/>
  
  <div style={{display: 'block', width: '200px', margin: 'auto', color: 'yellowgreen', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>Perejil
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>atado </div> <div>{o.Perejil['por atado']}</div></div>
  </div>
  <br/>
  
  <div style={{display: 'block', width: '200px', margin: 'auto', color: 'white', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>Verdeo
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>atado </div> <div>{o.Verdeo['por atado']}</div></div>
  </div>
  <br/>
<div style={{display: 'block', width: '200px', margin: 'auto', color: 'yellow', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>Banana
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div> <div>{ban['por kg']}</div></div>
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div> <div>{ban['por 2kg']}</div></div>
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div> <div>{ban['por kg oferta']}</div></div>
  </div>
<br/>
<div style={{display: 'block', width: '200px', margin: 'auto', color: 'red', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>Frutilla
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div> <div>{fru['por kg']}</div></div>
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div> <div>{fru['por 2kg']}</div></div>
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div> <div>{fru['por kg oferta']}</div></div>
  </div>
<br/>
<div style={{display: 'block', width: '200px', margin: 'auto', color: 'yellowgreen', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>Limón
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg $</div> <div>{lim['por kg']} </div></div>
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg $</div> <div>{lim['por 2kg']}</div></div>
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta $</div> <div>{lim['por kg oferta']} </div></div>
  </div>
<br/>
<div style={{display: 'block', width: '200px', margin: 'auto', color: 'red', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>Manzana
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div> <div>{man['por kg']}</div></div>
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div> <div>{man['por 2kg']}</div></div>
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div> <div>{man['por kg oferta']}</div></div>
  </div>
<br/>
<div style={{display: 'block', width: '200px', margin: 'auto',  color: 'orange', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>Naranja
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div> <div>{nar['por kg']}</div></div>
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div> <div>{nar['por 2kg']}</div></div>
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div> <div>{nar['por kg oferta']}</div></div>
  </div>
<br/>
<div style={{display: 'block', width: '200px', margin: 'auto', color: 'yellow', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>Durazno
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div> <div>$1200</div></div>
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div> <div>$2100</div></div>
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div> <div>$1050</div></div>
  </div>
  <br/>
  <div style={{display: 'block', width: '200px', margin: 'auto', color: 'wheat', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
    Ofertas de fruta
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg manzana</b> + <b style={orange}>1kg naranja</b> = {man['por kg oferta']+nar['por kg oferta']} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={yellowgreen}>1kg manzana</b> + <b style={yellowgreen}>1kg frutilla</b> = {man['por kg oferta']+fru['por kg oferta']} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg frutilla</b> + <b style={orange}>1kg banana</b> = {fru['por kg oferta']+ban['por kg oferta']} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={yellowgreen}>1kg frutilla</b> + <b style={yellowgreen}>1kg naranja</b> = {nar['por kg oferta']+fru['por kg oferta']} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg banana</b> + <b style={orange}>1kg naranja</b> = {ban['por kg oferta']+nar['por kg oferta']} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={yellowgreen}>1kg banana</b> + <b style={yellowgreen}>1kg manzana</b> = {man['por kg oferta']+ban['por kg oferta']} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg naranja</b> + <b style={orange}>1kg banana</b> + <b style={orange}>1kg manzana</b> = {nar['por kg oferta']+ban['por kg oferta']+man['por kg oferta']} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={yellowgreen}>1kg naranja</b> +  <b style={yellowgreen}>1kg frutilla</b> + <b style={yellowgreen}>1kg manzana</b> = {nar['por kg oferta']+fru['por kg oferta']+man['por kg oferta']} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg naranja</b> +  <b style={orange}>1kg frutilla</b> + <b style={orange}>1kg banana</b> = {nar['por kg oferta']+fru['por kg oferta']+ban['por kg oferta']} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={yellowgreen}>1kg frutilla</b> + <b style={yellowgreen}>1kg banana</b> + <b style={yellowgreen}>1kg manzana</b> = {ban['por kg oferta']+fru['por kg oferta']+man['por kg oferta']} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg frutilla</b> + <b style={orange}>1kg naranja</b> + <b style={orange}>1kg banana</b> + <b style={orange}>1kg manzana</b> = {man['por kg oferta']+fru['por kg oferta']+ban['por kg oferta']+nar['por kg oferta']} </div>
    </div>
    <br/><br/>
  </div>
  );
}<br/>

export default App;
