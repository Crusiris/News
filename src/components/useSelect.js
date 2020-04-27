import React, {useState} from 'react';


//Crendo nuestro propio hooks [custom hooks]
const useSelect = (stateInitial,options) => {
    
    //state del custom hook
    const [state, updateState]=useState(stateInitial);

    const SelectNews=()=>(
        <select 
        className="browser-default" 
        value={state} 
        onChange={e => updateState(e.target.value)}
        >

           {options.map(option =>(
               <option key={option.value} value={option.value}> {option.label}</option>
           ))

           }

        </select>

    );
    //Retornamos el state=lo que seleccione el usuario y el SelectNews= las opciones
    return [state, SelectNews]
}
 
export default useSelect;