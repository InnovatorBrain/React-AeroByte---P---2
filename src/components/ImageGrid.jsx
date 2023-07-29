import React from 'react'
import ImgGrid from "../assets/ImageGrid/ImageGrid.png"

const ImageGrid = () => {
    return (
        <>
            <section className='image-grid'>
                <img src={ImgGrid} alt="React AeroByte - P - 1 image grid" />
            </section>
            <div id='grid-text'>
                <h1 className='image-grid-heading'>Let the music move your soul.</h1>
                <p className='image-grid-text'>React AeroByte is a music streaming platform that connects artists with the people in their communities.</p>
            </div>
        </>
    )
}

export default ImageGrid