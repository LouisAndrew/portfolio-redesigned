import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import useImages from '../../../hooks/useImages'

const CarouselImg = ({ image, value }) => {

        // split snapshot => if snapshot contains assets. => for useImages hooks.
        const assetSplitter = str => str.includes('assets/') && str.split('assets/')[1]
        
        const data = useImages( assetSplitter(image) )
        const fluid = ( data && data.node ) && data.node.childImageSharp.fluid

        return fluid ? (
                <div value={value} className='carousel-img'>
                        <Img fluid={fluid} />
                </div>
        ) : (
                <></>
        )
}

CarouselImg.propTypes = {

        image: PropTypes.string.isRequired,
}

export default CarouselImg
