import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Circular from '../../../static/assets/decorations/Circular.svg'

const Container = styled.section`
  
        background-color: ${({ theme }) => theme.bg};
        position: relative;

        #circular {

                position: absolute;
                z-index: 1;

                bottom: -15%;
                left: 0;

                @media screen and ( max-width: 1440px ) {
                        
                        bottom: -20%;
                }

                @media screen and ( max-width: 840px ) {
                        
                        bottom: -15%;
                }

                @media screen and ( max-width: 464px ) {
                        
                        bottom: -25%;
                        transform: scale(.6) translateX(-40%);
                }

                @media screen and ( max-width: 464px ) and ( min-height: 720px ) {
                        
                        bottom: -22%;
                }
        }
`

const Content = styled.div`
        
        width: 100%;
        border-radius: 8px;
        padding: 5%;

        display: flex;
        
        background-color: ${({ theme }) => theme.dark};
        z-index: 2;

        @media screen and ( max-width: 840px ) {
                
                flex-direction: column-reverse;
        }
`

const Item = styled.div`
        
        width: 50%;
        padding: 5%;

        ${({ theme }) => theme.center()};
        flex-direction: column;

        &:last-child {

                align-items: flex-start;
        }

        @media screen and ( max-width: 840px ) {

                width: 100%;

                &:last-child {

                        align-items: center;
                        padding-top: 15%;
                }
        }
`

const ExpItem = styled.div`
        
        width: 100%;
        margin: 5% 0;

        display: flex;
        align-items: center;
        justify-content: flex-end;

        img {
                margin-left: 5vw;
        }

        @media screen and ( max-width: 840px ) {

                flex-direction: row-reverse;
                justify-content: center;

                margin: 10% 0;
                justify-content: center;

                img {

                        height: 150px;
                        width: 150px;

                        margin-left: 0;
                        margin-right: 10%;
                }
        }

        @media screen and ( max-width: 464px ) {
                
                img {

                        height: 75px;
                        width: 75px;

                        margin-right: 10%;
                }
        }
`

const Expertees = ({ heading, myExpertees }) => {

        return (
                <Container className='wrap'>
                        <Content>
                                <Item>
                                        {
                                                myExpertees.map( (expertee, i) => <ExperteeItem key={i} {...expertee} /> )
                                        }
                                </Item>
                                <Item>
                                        <h1>Things</h1>
                                        <h1>I Do</h1>
                                </Item>
                        </Content>
                        <Circular id='circular' />
                </Container>
        )
}

const ExperteeItem = ({ desc, heading, image }) => {

        return (
                <ExpItem>
                        <div>
                                <h3>{heading}</h3>
                                <p>{desc}</p>
                        </div>
                        <img src={image} alt={heading} />
                </ExpItem>
        )
}

Expertees.propTypes = {

        heading: PropTypes.string,
        myExpertees: PropTypes.arrayOf(
                PropTypes.shape({
                        heading: PropTypes.string.isRequired,
                        desc: PropTypes.string,
                        image: PropTypes.string.isRequired
                })
        ),
}

Expertees.defaultProps = {

        heading: '',
        myExpertees: [ ]
}

ExperteeItem.propTypes = {

        heading: PropTypes.string.isRequired,
        desc: PropTypes.string,
        image: PropTypes.string.isRequired
}

ExperteeItem.defaultProps = {

        desc: ''
}

export default Expertees
