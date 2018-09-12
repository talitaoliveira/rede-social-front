import React from 'react';

export default function Modal(props) {

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
            <button onClick={props.triggerParent}>
                Clica
            </button>
            {/* <button
                className={`pure-button button-xlarge ${disabledButton}`}
                onClick={() => { showModal() }}
            >
                {props.text}
            </button> */}
        </div>
    )

}
