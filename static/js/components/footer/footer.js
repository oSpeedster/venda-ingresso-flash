import React from "react";
// import App from "../../App";
import './styles.css';
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/the-flash-logo.png"

function Footer() {


    return (
        <div className="footer"><img className="footerimg" src={Logo} /><span>Todos os direitos reservados © </span><span>Desenvolvido por André Murilo</span>
        <nav className="footernav">
            <ul className="footerlist">
                <Link style={{ textDecoration: 'none' }} to='/'>
                    <li>HOME</li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/contato'>
                    <li>CONTATO</li>
                </Link>
                <Link style={{ textDecoration: 'none'}} to='/fotos' >
                <li>FOTOS</li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/comentario'>
                    <li>COMENTÁRIO</li>
                </Link>
            </ul>
        </nav></div>
    )
}


export default Footer;