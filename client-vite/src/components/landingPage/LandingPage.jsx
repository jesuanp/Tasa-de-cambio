import React from "react";
import s from './landingPage.module.css';
import {NavLink} from 'react-router-dom';

const LandingPage = () => {

    return (
        <div className={s.container}>
            <div className={s.containerText}>
                <h1>Conoce el precio del dólar en tu país.</h1>
            </div>
            <NavLink to='/home' className={s.NavLink}>Entrar</NavLink>
        </div>
    )
}

export default LandingPage;
