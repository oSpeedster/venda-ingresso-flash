import React from "react";
// import App from "../../App";
import './styles.css';
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/the-flash-logo.png"

function Header() {

    const navigate = useNavigate();

    return (
        <header>
                <img id="logo" src={Logo} />
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>
                        <li>HOME</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/contato'>
                        <li>CONTATO</li>
                    </Link>
                    <li onClick={() => navigate('/fotos')}>FOTOS</li>
                    <Link style={{textDecoration: 'none'}} to='/comentario'>
                        <li>COMENTÁRIO</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}


export default Header;