import React from "react";
import Profile from "../../components/profile/profile";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './styles.css'

function Comentario(){
    return (
        <div>
            <Header />
            <form className="form" action="/comentario">
                <div id="divComentario">
                    <h1>COMENTÁRIOS</h1>
                    <label for="text">NOME</label>
                    <input style={{display: "block"}}className="text" id="nome" type="text" name="nome"></input>
                    <br></br>
                    <label for="text">AVALIAÇÃO</label>
                    <select style={{display: "block"}}className="avaliacao text" id="nota" type="text" name="avaliacao">
                        <option className="avaliacao text estrelas" value="1">★☆☆☆☆</option>
                        <option className="avaliacao text estrelas" value="2">★★☆☆☆</option>
                        <option className="avaliacao text estrelas" value="3">★★★☆☆</option>
                        <option className="avaliacao text estrelas" value="4">★★★★☆</option>
                        <option className="avaliacao text estrelas" value="5">★★★★★</option>
                    </select>
                    <br></br>
                    <label for="mensagem">COMENTÁRIO</label>
                    <textarea style={{display: "block"}}className="text" id="comentario" type="text" name="msg" rows="10"></textarea>
                    <br></br>
                    <button className="enviarcoment text">ENVIAR</button>
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default Comentario;