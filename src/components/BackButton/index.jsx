import React from 'react';
import './index.css';

export default function BackButton(props) {

    function actionBack(){
        if(window.location.hash != '#/rede-social/') {
            window.history.back();
        }
    }

    return (
        <button className={`pure-button button-xlarge backButton`} onClick={() => actionBack()}>
            Voltar
        </button>
    )

}