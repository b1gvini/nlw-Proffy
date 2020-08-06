import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/45262259?s=400&u=1cb33c96d45a0f263d0ba8be4ea42b9dd03e65c1&v=4" alt=""/>
                <div>
                    <strong>Jess Deusa</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>1³ = 111</p>
            <br></br>
            <p>batata</p>
            <footer>
                <p>Preço/hora
                    <strong>R$ 75,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;