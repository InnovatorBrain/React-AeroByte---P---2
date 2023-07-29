import React from 'react'


const Crads = (props) => {
    return (
        <>
            <div className="cards-container">
                <div className="card">
                    <img src={props.image} className="card--image" />
                    <div className="card--stats">
                        <img src={props.startImage} className="card--star" />
                        <span id='ratting-fig'>{props.ratting}</span>
                        <span className="gray">({props.reviews}) • </span>
                        <span className="gray">{props.country}</span>
                    </div>
                    <div>

                        <p className='Card--des'><span className="titleName">{props.title}</span><br />{props.cardDescription}</p>
                        <p className='Card--des' ><span id='des-bold'>From ${props.price}</span> / person</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Crads
