import React from 'react';

export default function Button(props) {

    const disabledButton = (props.enabled === 'false' ? 'pure-button-disabled' : '');

    console.log(props);
    console.log(disabledButton);

    return (
        <button className={`pure-button button-xlarge ${disabledButton}`}>
            {props.text}
        </button>
    )

}