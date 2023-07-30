import React from 'react'


const Crads = (props) => {
    let cardBadge;
    if (props.openSpots === 0) {
        cardBadge = "Sold-Out"
    } else if (props.location === "Online") {
        cardBadge = "Online"
    }
    else {
        cardBadge = "In - Stock"
    }

return (
    <>
        <div className="cards-container">
            <div className="card">
                {cardBadge && <button> {cardBadge} </button>}
                <img src={props.image} className="card--image" alt='card-im'/>
                <div className="card--stats">
                    <img src={props.starImage} className="card--star" alt='start-rating-im'/>
                    <span id='ratting-fig'>{props.ratting}</span>
                    <span className="gray">({props.reviews}) • </span>
                    <span className="gray">{props.location}</span>
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
