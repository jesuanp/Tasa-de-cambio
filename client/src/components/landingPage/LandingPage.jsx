import React from "react";
import s from './landingPage.module.css';
import {NavLink} from 'react-router-dom';

const LandingPage = () => {

    return (
        <div className={s.container}>
            <div className={s.containerText}>
                <h1>Bienvenido a la página dónde puedes saber el precio en dolares de tu modena local</h1>
            </div>
            <NavLink to='/home' className={s.NavLink}>Entrar</NavLink>
        </div>
    )
}

export default LandingPage;
