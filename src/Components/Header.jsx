import React from "react";
import "./CSS/Header.css"

export default function Header() {

    return (
        <header className="n-header">

            <img src="https://res.cloudinary.com/dz1rjmgc8/image/upload/v1710364213/LogoMesaTecnica-03_vaknei.png" alt="" className="n-header-img"/>
            <ul className="n-header-opciones">
                <li>OJETIVO</li>
                <li>ALIADOS</li>
                <li>EVENTOS</li>
            </ul>
        </header>
    )



} 