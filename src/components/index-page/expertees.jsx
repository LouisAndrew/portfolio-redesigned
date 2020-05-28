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

                transform: scale(.8) translateX(-20%);

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
        position: relative;

        display: flex;
        
        background-color: ${({ theme }) => theme.dark};
        z-index: 3;

        @media screen and ( max-width: 840px ) {
                
                flex-direction: column;
        }
`

const Item = styled.div`
        
        width: 50%;
        padding: 5%;

        display: flex;
        align-items: flex-end;
        justify-content: center;
        flex-direction: column;

        &:last-child {

                align-items: flex-start;
        }

        h1 {
                text-align: right;
        }

        @media screen and ( max-width: 840px ) {

                width: 100%;
                align-items: center;

                &:first-child {

                        padding-top: 15%;
                }

                h1 {
                        text-align: left;
                }
        }
`

const ExpItem = styled.div`
        
        width: 100%;
        margin: 5% 0;

        display: flex;
        align-items: center;

        img {
                
                margin-right: 2vw;
                height: 75px;
                width: 75px;
        }       

        @media screen and ( max-width: 840px ) {

                justify-content: center;

                margin: 10% 0;

                img {

                        height: 125px;
                        width: 125px;

                        margin-left: 0;
                        margin-right: 10%;
                }
        }

        @media screen and ( max-width: 464px ) {
                
                img {

                        height: 50px;
                        width: 50px;

                        margin-right: 10%;
                }
        }
`

const Expertees = ({ heading, myExpertees, headingList }) => {

        return (
                <Container className='wrap'>
                        <Content>
                                <Item>
                                        <div data-testid='exprt-heading'>
                                                {
                                                        headingList && headingList.map( (head, i) => <h1 key={i}>{head.h}</h1> )
                                                }
                                        </div>
                                </Item>
                                <Item data-testid='exprt-item'>
                                        {
                                                myExpertees && myExpertees.map( (expertee, i) => <ExperteeItem key={i} {...expertee} /> )
                                        }
                                </Item>
                        </Content>
                        <Circular id='circular' />
                </Container>
        )
}

export const ExperteeItem = ({ desc, heading, image }) => {

        return (
                <ExpItem>
                        <img src={image} alt={heading} />
                        <div>
                                <p>{heading}</p>
                        </div>
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
        headingList: PropTypes.arrayOf(
                PropTypes.shape({
                        h: PropTypes.string.isRequired,
                }),
        ),
}

Expertees.defaultProps = {

        heading: '',
        myExpertees: [ ],
        headingList: [ ]
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
