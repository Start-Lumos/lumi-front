import React, { useState } from 'react';
import { Decribe } from './Style.TextCounter';

function TextCounter(props){
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    const verificarQtd = (event) => {
        const elemento = event.target
              
        if(elemento.value.length <= props.limit){
            setCount(elemento.value.length)
            setText(elemento.value)
        }

    }
    
    return (
        <Decribe>
            <label htmlFor="descricao">Descreva seu serviço</label>
            <textarea onChange={verificarQtd.bind(this)} value={text} name="descricao" id="descricao"/>
            <div>
                <span>Total:</span> {count} / {props.limit}
            </div>
        </Decribe>
    )
}

export default TextCounter;