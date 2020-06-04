import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`

        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: ${({ theme }) => theme.dark};

        @media screen and ( max-width: 840px ) {
                
                flex-direction: column-reverse;

                & > div {

                        width: 100%;

                        &:last-child {
                                margin-bottom: 5vh;
                        }

                        li {
                                margin: 10% 0;
                        }
                }
        }

        @media screen and ( max-width: 640px ) {
                
                & > div {
                        margin: 10% 0;
                }
        }
`

const Left = styled.div`

        h3 {
                padding-right: 30%;

                font-family: 'Open Sans', sans-serif !important;
                font-weight: bold;
        }
        
        .contact {

                display: flex;
                align-items: center;

                margin: 5% 0;

                img {   
                        height: 50px;
                        width: 50px;
                        margin-right: 4vh;
                }

                @media screen and ( max-width: 640px ) {
                        
                        img {
                                height: 35px;
                                width: 35px;
                        }
                }
        }
`

const Right = styled.div`
        
        .heading {

                h1 {
                        text-align: right;
                }
        }
`

const Contact = ({ contactLists, headingList, subheading }) => {

        return (
                <Container id='contact' className='wrap'>
                        <Left data-testid='left'>
                                <h3>{subheading}</h3>
                                {
                                        contactLists.map( (ctc, i) => (
                                                <div data-testid='ctc' key={ctc.social} className="contact">
                                                        <img data-testid={`ctc-img-${i}`} src={`/${ctc.icon}`} alt={ctc.social} />
                                                        <p data-testid={`ctc-p-${i}`}>{ctc.value}</p>
                                                </div>
                                        ) )
                                }
                        </Left>
                        <Right data-testid='right'>
                                <div className='heading'>
                                        {
                                                headingList.map( heading => <h1 key={heading.h}>{heading.h}</h1> )
                                        }
                                </div>
                        </Right>
                </Container>
        )
}

Contact.propTypes = {

        contactLists: PropTypes.arrayOf(
                PropTypes.object,
        ).isRequired,
        headingList: PropTypes.arrayOf(
                PropTypes.shape({
                        h: PropTypes.string,
                }),
        ).isRequired,
        subheading: PropTypes.string,
}

Contact.defaultProps = {

        subheading: ''
}

export default Contact