import React from 'react';

export default function Button(props) {

    const disabledButton = (props.enabled === false ? 'pure-button-disabled' : '');
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
                    <p>Para ser voluntário Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
                </section>
                <menu>
                    <button onClick={() => { cancelModal() }} type="reset">Cancel</button>
                    <button type="submit">Confirm</button>
                </menu>
            </dialog>
            <button
                className={`pure-button button-xlarge ${disabledButton}`}
                onClick={() => { showModal() }}
            >
                {props.text}
            </button>
        </div>
    )

}