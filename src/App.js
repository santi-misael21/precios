// import logo from './logo.svg';
// import whatsapp from './whatsappIcon.png';
import './App.css';
import { object } from './object';
import whatsLogo from './assets/WhatsApp.png';
// import faceLogo from './assets/Facebook.png';
// import instaLogo from './assets/Instagram.png';
import { createBrowserRouter, useNavigate } from 'react-router-dom';
import Stores from './components/Stores';
import Product from './components/Product';

export const router = createBrowserRouter([
  {
    path: '/mayoristas',
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
  // let bat = o.Batata
  // let ceb = o.Cebolla
  // let zan = o.Zanahoria
  // let zap = o.Anco
  // let tom = o['Tomate perita']
  let ban = o.Banana
  let man = o.Manzana
  let nar = o.Naranja
  let fru = o.Frutilla
  let lim = o.Limón
  let dur = o.Durazno
  let variables = Object.keys(object).map(prod => {return {...object[prod], prod}}); 
  // let red = colour('red')
  let orange = colour('orange')
  // let yellow = colour('yellow')
  // let orangered = colour('orangered')
  // let wheat = colour('wheat')
  let yellowgreen = colour('yellowgreen')
  const additem = (a) => console.log({a}) 
  return (
    <div className="App" style={{backgroundColor: 'black'}}>
      <div style={{color:'gray'}}>
    Lista de precios <br/>
    Última actualización: 2 de marzo de 2024
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
    <br/> 
    {variables.map((v,i)=> //console.log(v['prod'])
       <div key={i}> <Product product={v['prod']} color={v['color']} /> <br/></div>
      )}
  <div style={{display: 'block', width: '220px', margin: 'auto', color: 'yellow', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
      <div style={{display:'flex' , justifyContent: 'space-between'}}>
        <div style={{display: 'flex', margin: 'auto'}}>Huevos N° 1</div>
        {/* <div style={{fontSize:'9px', marginRight: '7px'}}>Agregar ↓</div> */}
      </div>
      <div className='input' style={{display: 'flex', justifyContent: 'space-between', margin: '4px auto', cursor: 'pointer', borderRadius: '5px', padding: '2px auto'}}><div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}> <div>Maple </div> <div>$4200</div> </div> {/*<div ><input type='checkbox' style={{cursor: 'pointer'}}/> </div>*/}</div>
      <div className='input' style={{display: 'flex', justifyContent: 'space-between', margin: '4px auto', cursor: 'pointer', borderRadius: '5px', padding: '2px auto'}}><div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}> <div>2 maples </div> <div>$8000</div> </div> {/*<div ><input type='checkbox' style={{cursor: 'pointer'}}/> </div>*/}</div>
      <div className='input' style={{display: 'flex', justifyContent: 'space-between', margin: '4px auto', cursor: 'pointer', borderRadius: '5px', padding: '2px auto'}}><div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}> <div>4 maples </div> <div>$15000</div> </div> {/*<div ><input type='checkbox' style={{cursor: 'pointer'}}/> </div>*/}</div>
      {/* <div className='input' style={{display: 'flex', justifyContent: 'space-between', margin: '4px auto', cursor: 'pointer', borderRadius: '5px', padding: '2px auto'}}><div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}> <div>por kg </div> <div>{pot['por kg']}</div> </div> <div ><input type='checkbox' style={{cursor: 'pointer'}}/> </div></div>
      <div className='input' style={{display: 'flex', justifyContent: 'space-between', margin: '4px auto', cursor: 'pointer', borderRadius: '5px', padding: '2px auto'}}><div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}> <div>por 2kg </div> <div>{pot['por 2kg']}</div> </div> <div ><input type='checkbox' style={{cursor: 'pointer'}}/> </div></div> */}
      <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: 'rgba(100,100,100,0.2)', margin: '5px -5px', padding: '0px 5px', borderRadius: '5px'}}><div style={{width: '70%', textAlign: 'left'}}><b>precio por maple llevando 4</b> </div> <div style={{display: 'flex', margin: 'auto 0px auto auto '}}>$3750</div></div>
  <br/></div>
  <br/>
  <div style={{display: 'block', width: '220px', margin: 'auto', color: 'wheat', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
    Ofertas de fruta
    {/* <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg manzana</b> + <b style={orange}>1kg naranja</b> = {man['por 2kg']/2+nar['por 2kg']/2} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={yellowgreen}>1kg manzana</b> + <b style={yellowgreen}>1kg durazno</b> = {man['por 2kg']/2+dur['por 2kg']/2} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg durazno</b> + <b style={orange}>1kg banana</b> = {dur['por 2kg']/2+ban['por 2kg']/2} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={yellowgreen}>1kg durazno</b> + <b style={yellowgreen}>1kg naranja</b> = {nar['por 2kg']/2+dur['por 2kg']/2} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg banana</b> + <b style={orange}>1kg naranja</b> = {ban['por 2kg']/2+nar['por 2kg']/2} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={yellowgreen}>1kg banana</b> + <b style={yellowgreen}>1kg manzana</b> = {man['por 2kg']/2+ban['por 2kg']/2} </div> */}
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg naranja</b> + <b style={orange}>1kg banana</b> + <b style={orange}>1kg manzana</b> = {nar['por 2kg']/2+ban['por 2kg']/2+man['por 2kg']/2} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={yellowgreen}>1kg naranja</b> +  <b style={yellowgreen}>1kg durazno</b> + <b style={yellowgreen}>1kg manzana</b> = {nar['por 2kg']/2+dur['por 2kg']/2+man['por 2kg']/2} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg naranja</b> +  <b style={orange}>1kg durazno</b> + <b style={orange}>1kg banana</b> = {nar['por 2kg']/2+dur['por 2kg']/2+ban['por 2kg']/2} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={yellowgreen}>1kg durazno</b> + <b style={yellowgreen}>1kg banana</b> + <b style={yellowgreen}>1kg manzana</b> = {ban['por 2kg']/2+dur['por 2kg']/2+man['por 2kg']/2} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg durazno</b> + <b style={orange}>1kg naranja</b> + <b style={orange}>1kg banana</b> + <b style={orange}>1kg manzana</b> = {man['por 2kg']/2+dur['por 2kg']/2+ban['por 2kg']/2+nar['por 2kg']/2} </div>
    </div>
    <br/><br/>
  </div>
  );
}<br/>

export default App;
