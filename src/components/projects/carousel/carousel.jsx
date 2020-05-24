import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CarouselImg from './carousel-image'
import Back from '../../../../static/assets/back.svg'
import Forward from '../../../../static/assets/forward.svg'
import CarouselPagin from './carousel-pagination'

const Container = styled.div`
        
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 5% 0;

        .carousel-wrapper {

                width: 100%;

                height: fit-content;
                position: relative;

                overflow: hidden;

                display: flex;

                .carousel-img {

                        min-width: 100%;

                        z-index: 1;
                        transition: .2s;
                }

                .pagin-wrapper {

                        position: absolute;
                        left: 50%;
                        top: 90%;
                        transform: translate(-50%, -90%);

                        z-index: 2;

                        display: flex;
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

        .nav {

                &:hover {
                        cursor: pointer;
                }
        }
`

const Carousel = ({ snapshots }) => {

        const [ inDisplay, setInDisplay ] = useState(0)
        const [ length, setLength ] = useState( snapshots.length )

        const next = () => {

                const nextIndex = inDisplay + 1 > length - 1 ? 0 : inDisplay + 1

                setInDisplay(nextIndex)
        }

        const prev = () => {

                const nextIndex = inDisplay === 0 ? length - 1 : inDisplay - 1
                
                setInDisplay(nextIndex)
        }

        const setDisplay = index => {

                const array = Array.from( document.querySelectorAll('.carousel-img') )

                array.forEach( el => {
                        // eslint-disable-next-line no-param-reassign
                        el.style.transform = `translateX(-${ index * 100 }%)`
                } )
        }

        const goToIndex = index => setInDisplay(index)

        useEffect(() => {

                setDisplay(inDisplay)
        }, [inDisplay])

        return (
                <Container>
                        { length > 1 && <Back className='nav' id='back' onClick={prev} /> }
                        <div id='car-wrapper' className='carousel-wrapper'>
                                {
                                        snapshots.map( (snapshot, i) => <CarouselImg value={i} key={i} image={snapshot} /> )
                                }
                                <div className='pagin-wrapper'>
                                        {
                                                [...Array(length).keys()].map( key => <CarouselPagin index={key} inDisplay={inDisplay} goToIndex={goToIndex} /> )
                                        }
                                </div>
                        </div>
                        { length > 1 && <Forward className='nav' id='forward' onClick={next} /> }
                </Container>
        )
}

Carousel.propTypes = {
        snapshots: PropTypes.arrayOf(
                PropTypes.string.isRequired,
        ).isRequired,
}

export default Carousel
