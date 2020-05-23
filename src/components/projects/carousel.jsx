import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CarouselImg from './carousel-image'
import Back from '../../../static/assets/back.svg'
import Forward from '../../../static/assets/forward.svg'

const Container = styled.div`
        
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 5% 0;

        .carousel-wrapper {

                width: 100%;
                /* min-height: 50vh;
                max-height: 100vh; */
                /* height: 100%; */

                height: fit-content;
                position: relative;

                .carousel-img {
                        width: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;

                        z-index: 1;

                        &.active {
                                z-index: 2;
                                position: relative;
                        }
                }
        }

        #back {
                z-index: 3;   
                fill: #fff;
        }

        #forward {
                z-index: 3;   
                fill: #fff;
        }
`

const Carousel = ({ snapshots }) => {

        const [ leftToRight, setLeftToRight ] = useState(false)
        const [ rightToLeft, setRightToLeft ] = useState(false)

        const [ inDisplay, setInDisplay ] = useState(0)
        const [ length, setLength ] = useState( snapshots.length )

        const next = () => {

                const nextIndex = inDisplay + 1 > length - 1 ? 0 : inDisplay + 1

                setInDisplay(nextIndex)
                setLeftToRight(true)
        }

        const prev = () => {

                const nextIndex = inDisplay === 0 ? length - 1 : inDisplay - 1
                
                setInDisplay(nextIndex)
                setRightToLeft(true)
        }

        const getCarouselImgByIndex = inDisplayIndex => {

                if ( inDisplay >= length ) return null

                const array = Array.from( document.querySelectorAll('.carousel-img') )

                console.log(array)

                const disp = array.filter( node => node.getAttribute('value') === inDisplayIndex.toString() )[0]

                return disp
        }       

        const setActive = () => {

                const active = getCarouselImgByIndex(inDisplay)

                console.log(active)
                if ( active && !active.classList.contains('active') )
                        active.classList.add('active')
        }

        useEffect(() => {
                setActive()
        })

        useEffect(() => {

                if ( leftToRight ) {

                        const prevIndex = inDisplay === 0 ? length - 1 : inDisplay - 1
                        const prevImg = getCarouselImgByIndex(prevIndex)

                        if ( prevImg && prevImg.classList.contains('active') )
                                prevImg.classList.remove('active')

                        setActive()

                        setLeftToRight(false)
                }
        }, [ inDisplay, leftToRight ])

        useEffect(() => {

                if ( rightToLeft ) {

                        const prevIndex = inDisplay === length - 1 ? 0 : inDisplay + 1
                        const prevImg = getCarouselImgByIndex(prevIndex)

                        if ( prevImg && prevImg.classList.contains('active') )
                                prevImg.classList.remove('active')

                        setActive()

                        setLeftToRight(false)
                }
        }, [ inDisplay, rightToLeft ])

        return (
                <Container>
                        <Back id='back' onClick={prev} />
                        <div className='carousel-wrapper'>
                                {
                                        snapshots.map( (snapshot, i) => <CarouselImg value={i} key={i} image={snapshot} /> )
                                }
                        </div>
                        <Forward id='forward' onClick={next} />
                </Container>
        )
}

Carousel.propTypes = {
        snapshots: PropTypes.arrayOf(
                PropTypes.string.isRequired,
        ).isRequired,
}

export default Carousel
