import React from 'react';
import styles from './Form.module.css';
import useSelect from './useSelect';

const Form = () => {

    //state hooks custom
    const [category, SetCategory] = useSelect('');
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