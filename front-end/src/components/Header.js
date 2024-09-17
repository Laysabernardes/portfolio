//import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { logo } from "../assets/images.js";
import "../styles/header.css";


function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="nav">
            <div className="header_container">
                <a href="https://www.linkedin.com/in/laysabernardes/">
                    <img className="header_logo" src={logo} alt="Logo escrito LB de letra cursiva" />
                </a>
                <p className="header_titulo">Laysa.</p>
            </div>

            <ul className="nav_lista">
                <li>
                    <a className="nav_link" onClick={(e) => {
                        navigate("/main");
                    }}>HOME</a>
                </li>

                <li>
                    <a className="nav_link" onClick={(e) =>{
                        navigate("/sobre");
                    }}>SOBRE</a>
                </li>

                <li>
                    <a className="nav_link" onClick={(e) => {
                        navigate("/projeto");
                    }}>PROJETOS</a>
                </li>

                <li>
                    <a className="nav_link" onClick={(e) => {
                        navigate("/contato")
                    }}>CONTATO</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;