import React from "react";
import Profile from "../../components/profile/profile";
import Header from "../../components/header/header";
import './styles.css'
import Footer from "../../components/footer/footer";

function Fotos(){
    return (
        <>
            <Header />
            <div>
                <h1 class="titulofoto"> FOTOS </h1>
                <div class="galeria">
                    <div class="fotos" id="foto1"></div>
                    <div class="fotos" id="foto2"></div>
                    <div class="fotos" id="foto3"></div>
                    <div class="fotos" id="foto4"></div>
                    <div class="fotos" id="foto5"></div>
                    <div class="fotos" id="foto6"></div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Fotos;