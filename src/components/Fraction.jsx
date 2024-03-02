import { useState } from "react"

export default function Fraction ({object, product, fraction}) {
    // console.log({product, fraction, tf: typeof fraction, tp: typeof product})

    let [input, setInput] = useState(false); 
    let [title, setTitle] = useState(null); console.log({title})
    let [value, setValue] = useState(null); console.log({value, title, input})

    return (
        <div 
        onClick={()=>{setInput(!input); setTitle(product); setValue(fraction)}}
        className='input' 
        style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            margin: '4px auto', 
            cursor: 'pointer', 
            borderRadius: '5px', 
            padding: '2px auto'
        }}>
            <div 
            style={{ 
                width: '100%', 
                display: 'flex', 
                justifyContent: 'space-between'
            }}> 
                <div> {fraction} </div> 
                <div>{object[fraction]}</div> 
            </div> 
            {/* {
            <div>{fraction !== 'por kg oferta' ?
                <input 
                type='checkbox' 
                checked={input} 
                style={{cursor: 'pointer'}}
                onChange={(e)=>{setInput(!input); setTitle(product); setValue(fraction)}}
                /> :
                <div style={{width: '19.5px'}}></div>}
            </div>
            } */}
        </div>
    )
}