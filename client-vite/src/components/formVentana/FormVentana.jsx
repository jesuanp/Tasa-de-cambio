import React, {useContext, createRef, useState, useEffect} from "react";
import s from './formVentana.module.css';
import DivisaContext from "../../context/divisas/divisaContext";

const FormVentana = () => {

    const divisaContext = useContext(DivisaContext);

    const {abbreviation, coinchange, getChange, getHistorical} = divisaContext;

    let dateRef = createRef(null);
    
    const [showHistorical, setShowHistorical] = useState(false);
    
    const [currencyToDollar, setCurrencyToDollar] = useState(false);
    
    const [selectValue, setSelectValue] = useState('select');
    const [inputDollar, setInputDollar] = useState('');
    const [inputCurrency, setInputCurrency] = useState('');


    useEffect(() => {
        if(currencyToDollar){
            setInputDollar(coinchange);
        }
        else {
            setInputCurrency(coinchange);
        }
    }, [coinchange]);

    const onSubmit = e => {
        e.preventDefault();

        if(selectValue.trim() === '' || selectValue.trim() === 'select'){
            alert('Seleciona una divisa');
            return;
        }

        if(showHistorical){
            if(dateRef.current.value === '') return alert('Tienes que poner una fecha');

            if(currencyToDollar === true){

                getHistorical(selectValue, inputCurrency, dateRef.current.value, currencyToDollar.toString());
            }
            else {

                getHistorical(selectValue, inputDollar, dateRef.current.value, currencyToDollar.toString());
            }
        }
        else {
            
            if(currencyToDollar === true){
                
                getChange(selectValue, inputCurrency, currencyToDollar.toString());
                return;
            }

            getChange(selectValue, inputDollar);
        }
    }

    const onChange = () => {
        setShowHistorical(state => !state);
    }

    var selectCurrency = <select  value={selectValue} onChange={(e)=>setSelectValue(e.target.value)} className={s.select}>
        <option value="select" disabled>Select</option>
        {
            abbreviation && abbreviation.map((e, i) => (

                <option key={i} value={e}>{e}</option>
            ))
        }
    </select>

    return (
        <form onSubmit={onSubmit} className={s.form}>

                
            { currencyToDollar === false
                ? <div className={s.containerInputs}>
                    <span className={s.span}>USD</span>

                    <input
                        className={s.input}
                        type="number"
                        value={inputDollar}
                        onChange={(e)=>setInputDollar(e.target.value)}
                        placeholder="Escribe una cantidad..."
                    />

                </div>

                : <div className={s.containerInputs}>
                    {selectCurrency}

                    <input
                        className={s.input}
                        type="number"
                        value={inputCurrency}
                        onChange={(e)=>setInputCurrency(e.target.value)}
                        placeholder="Escribe una cantidad..."
                    />

                </div>
            }

            <div className={s.svg} onClick={()=>setCurrencyToDollar(state => !state)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/></svg>
            </div>

            { currencyToDollar === true
                ? <div className={s.containerInputs}>
                    <span className={s.span}>USD</span>

                    <input
                        className={s.input}
                        type="text"
                        disabled
                        value={inputDollar}
                        placeholder="Cantidad en dolares..."
                    />

                </div>

                : <div className={s.containerInputs}>
                    {selectCurrency}

                    <input
                        className={s.input}
                        type="text"
                        disabled
                        value={inputCurrency}
                    />

                </div>
            }

            { showHistorical &&
                <div>
                    <input ref={dateRef} type="date" className={s.date} />
                </div>
            }

            <div className={s.buttons}>
                <input type="submit" value='convertir' className={s.btnSubmit} />

                <button type="button" className={s.btnSubmit} onClick={onChange}>Modificar fecha</button>
            </div>
            
        </form>
    )
}

export default FormVentana;
