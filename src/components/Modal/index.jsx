import React from 'react';

export default function Modal(props) {

    var handleToUpdate  =   props.handleToUpdate;


    const favDialog = document.getElementById('favDialog');

    function showModal() {
        console.log('Show Modal');
        favDialog.showModal();
    }

    function cancelModal() {
        console.log('Cancel Modal');
        favDialog.close();
    }

    return (
        
        <div>
            <dialog id="favDialog" className="dialogInfo">
                <section className="">
                    <select name="" id="">
                        <option value="SP">São Paulo</option>
                        <option value="PE">Pernambuco</option>
                        <option value="RJ">Rio de Janeiro</option>
                    </select>
                </section>
            </dialog>
            {/* <button onClick={props.triggerParent}> */}
            <button onClick={() => handleToUpdate('PT')}>
                Clica
            </button>
            <button
                className={`pure-button button-xlarge`}
                onClick={() => showModal()}
            >
            Filtra
                {props.text}
            </button>
        </div>
    )

}
