import { object } from "../object";
import Fraction from "./Fraction";

export default function Product ({product, color}) {
    return(
        <div style={{display: 'block', width: '220px', margin: 'auto', color, backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
            <div style={{display:'flex' , justifyContent: 'space-between'}}>
                <div style={{display: 'flex', margin: 'auto'}}>
                    {product}
                </div>
                <div style={{fontSize:'9px', marginRight: '7px'}}>
                    Agregar ↓
                </div>
            </div>
            {Object.keys(object[product]).map((o,i) => o !== 'color' && <Fraction 
                key={i} 
                object={object[product]}
                product={product}
                fraction={o} 
            />)}
        </div>
    )
}