import React from 'react';

export default function Button(props) {

    const disabledButton = (props.enabled === false ? 'pure-button-disabled' : '');

    return (
        <button className={`pure-button button-xlarge ${disabledButton}`}>
            {props.text}
        </button>
    )

}