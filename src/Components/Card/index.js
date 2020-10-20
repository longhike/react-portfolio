import React from 'react'


function Card (props) {
    return (
        <div className={`card ${props.class}`}>
            {props.children}
        </div>
    )
}

export default Card