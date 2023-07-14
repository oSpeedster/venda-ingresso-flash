import React from "react";
import Profile from "../../components/profile/profile";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './styles.css'

function Contato(){
    return (
        <div id="divToda">
            <Header />
            <div id="divInfo">
                <h1 id="titulo">INFORMAÇÕES PARA CONTATO</h1>
                <h2 id="titulo2">Cinema Nausey</h2>
                <div className="infocontato">
                    <span className="spanContato">▪ Telefone:</span>
                    <span className="spanContato contato">{'(35) 3600-0000'}</span>
                    <span className="spanContato">▪ Whatsapp:</span>
                    <span className="spanContato contato">{'(35) 91234-5678'}</span>
                    <span className="spanContato">▪ Email:</span>
                    <span className="spanContato contato">cinema@nausey.com</span>
                    <span className="spanContato">▪ Endereço:</span>
                    <span className="spanContato contato" id="endereco">Avenida Aironô, 142 - Centro </span>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contato;