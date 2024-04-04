import React, {useEffect, useContext} from "react";
import s from './home.module.css';
import FormVentana from "../formVentana/FormVentana";
import DivisaContext from "../../context/divisas/divisaContext";

const Home = () => {

    const divisaContext = useContext(DivisaContext);

    const {getAbbreviatioCoins} = divisaContext;

    useEffect(()=> {
        getAbbreviatioCoins();
    }, [getAbbreviatioCoins]);

    return (
        <div className={s.container}>

            <div className={s.ventana}>

                <div className={s.head}>
                    <h2>Cambio de divisa</h2>
                </div>

                <div className={s.body}>

                    <FormVentana/>

                </div>
                
            </div>
        </div>
    )
}

export default Home;
