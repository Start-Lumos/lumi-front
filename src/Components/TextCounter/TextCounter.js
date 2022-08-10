import React from 'react';
import { Decribe } from './Style.TextCounter';

function TextCounter(props){
    
    return (
        <Decribe editData={props.editData}>
            <label htmlFor="descricao">Descreva seu serviço</label>
            <textarea onChange={props.onChange} value={props.value} name={props.name} id={props.id} maxLength="150"/>
            <div>
                <span>Total:</span> {props.count} / 150
            </div>
        </Decribe>
    )
}

export default TextCounter;