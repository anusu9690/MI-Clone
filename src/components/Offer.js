import React from 'react'

const Offer = ({ key, index, src, link }) => {
    return (
        <div>
            <a href={link} ><img src={src} alt={`${index} offer`}></img></a>
        </div>
    )
}

export default Offer
