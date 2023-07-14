import React, { lazy, Suspense, useState } from "react";
import Profile from "../../components/profile/profile";
import Header from "../../components/header/header";
// import { Link, useLocation } from "react-router-dom";
import './styles.css'
import Video from '../../assets/the-flash-trailer.mp4.mp4'
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";


function Home(){

    return (
        <div id="divInteira">
            <Header />
            <div id='banner'></div>
            <div id='trailer-container'>
                <div className="content">
                    <video controls className="trailer">
                        <source src={Video} />
                        Seu navegador não suporta video.
                    </video>
                </div>
                <div id='sinopse'>
                    <p className="description">
                        Os mundos colidem quando Flash viaja no tempo para mudar os eventos 
                        do passado. No entanto, quando sua tentativa de salvar sua família 
                        altera o futuro, ele fica preso em uma realidade na qual o General 
                        Zod voltou, ameaçando a aniquilação.
                    </p>
                    <Link to='/comprar-ingresso'>
                        <button className="button">Comprar Ingresso</button>
                    </Link>
                </div>
            </div>
            <div class='actor-cards-content'>
                <div className='cards-content'>
                    <div className="card banner1">Flash - Ezra Miller</div>
                    <div className="card banner2">Supergirl - Sasha Calle</div>
                    <div className="card banner3">Batman - Michael Keaton</div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;