import React, {useState} from 'react';


//Crendo nuestro propio hooks [custom hooks]
const useSelect = (stateInitial,options) => {
    
    //state del custom hook
    const [state, updateState]=useState('')

    const SelectNews=()=>(
        <select className="browser-default">

             <option value=""> - - - Seleccione - - - </option>

        </select>

    );
    //Retornamos el state=lo que seleccione el usuario y el SelectNews= las opciones
    return [state, SelectNews]
}
 
export default useSelect;