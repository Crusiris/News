import React from 'react';
import styles from './Form.module.css';
import useSelect from './useSelect';

const Form = () => {

    //Opciones para el select
    const OPTIONS = [
        {value:'general', label:'General'},
        {value:'business', label:'Negocios'},
        {value:'entertainment', label:'Entretenimiento'},
        {value:'health', label:'Salud'},
        {value:'science', label:'Ciencia'},
        {value:'sports', label:'Deporte'},
        {value:'technology', label:'Tecnologia'}
        
    ]

    //state hooks custom
    const [category, SetCategory] = useSelect('technology', OPTIONS);
    return ( 
        <div className={` ${styles.search} row`}>
                <div className="col s12 m8 offset-m2">
                    <form>
                    <h2 className={styles.heading}>Encuentra Noticias por categoria</h2>
                    
                    <SetCategory/>

                    <div className="input-field col s12">
                        <input
                        type="submit"
                        className={`${styles.btnBlock} btn-large amber darken-2`}
                        value="Buscar"
                        />
                    </div>
                   
                    </form>
                </div>
        </div>
     );
}
 
export default Form;