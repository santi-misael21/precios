import logo from './logo.svg';
import './App.css';
import { object } from './object';

function App() {
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
  return (
    <div className="App" style={{backgroundColor: 'black'}}>
    Lista de precios <br/>
    Última actualización: 15 de febrero de 2024
 <br/>
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
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>cajón </div> <div> {tom.bolsa} </div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/2 cajón </div> <div> {tom['1/2 bolsa']} </div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/4 cajón </div> <div> {tom['1/4 bolsa']} </div></div>
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
<div style={{display: 'block', width: '200px', margin: 'auto', color: 'orange', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>Naranja
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div> <div>{nar['por kg']}</div></div>
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div> <div>{nar['por 2kg']}</div></div>
  <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div> <div>{nar['por kg oferta']}</div></div>
  </div>
  <br/>
  <div style={{display: 'block', width: '200px', margin: 'auto', color: 'wheat', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
    Ofertas de fruta
    <br/><br/>
    <div style={{color: 'orange'}}> 1kg manzana + 1kg frutilla = {man['por kg oferta']+fru['por kg oferta']} </div>
    <br/><br/>
    <div style={{color: 'yellowgreen'}}> 1kg frutilla + 1kg banana = {fru['por kg oferta']+ban['por kg oferta']} </div>
    <br/><br/>
    <div style={{color: 'orange'}}> 1kg frutilla + 1kg naranja = {nar['por kg oferta']+fru['por kg oferta']} </div>
    <br/><br/>
    <div style={{color: 'yellowgreen'}}> 1kg banana + 1kg naranja = {ban['por kg oferta']+nar['por kg oferta']} </div>
    <br/><br/>
    <div style={{color: 'orange'}}> 1kg banana + 1kg manzana = {man['por kg oferta']+ban['por kg oferta']} </div>
    <br/><br/>
    <div style={{color: 'yellowgreen'}}> 1kg naranja + 1kg banana + 1kg manzana = {nar['por kg oferta']+ban['por kg oferta']+man['por kg oferta']} </div>
    <br/><br/>
    <div style={{color: 'orange'}}> 1kg naranja +  1kg frutilla + 1kg manzana = {nar['por kg oferta']+fru['por kg oferta']+man['por kg oferta']} </div>
    <br/><br/>
    <div style={{color: 'yellowgreen'}}> 1kg naranja +  1kg frutilla + 1kg banana = {nar['por kg oferta']+fru['por kg oferta']+ban['por kg oferta']} </div>
    <br/><br/>
    <div style={{color: 'orange'}}> 1kg frutilla + 1kg banana + 1kg manzana = {ban['por kg oferta']+fru['por kg oferta']+man['por kg oferta']} </div>
    <br/><br/>
    <div style={{color: 'yellowgreen'}}> 1kg frutilla + 1kg naranja + 1kg banana + 1kg manzana = {man['por kg oferta']+fru['por kg oferta']+ban['por kg oferta']+nar['por kg oferta']} </div>
    </div>
    <br/><br/>
  </div>
  );
}<br/>

export default App;
