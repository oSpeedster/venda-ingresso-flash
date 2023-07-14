import React from "react";
import "./styles.css"

function Button({ name, active, onClick }){
    return (
        <div className="containerButton">
            <button onClick={() => onClick(20)} className={active ? 'button' : 'disabledButton'}>{name}</button>
            <span>Seus Dados estão a salvo conosco</span>
        </div>


        //<div className="containerButton">
        //    <button onClick={onClick} className={active ? 'button' : 'disabledButton'}>{name}</button>
        //    <span>Seus Dados estão a salvo conosco</span>
        //</div>
    )
}

export default Button
