import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Logo from '../../static/assets/Logo.svg'

const Container = styled.div`

        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        background-color: ${({ theme }) => theme.dark};

        @media screen and ( max-width: 464px ) {
                
                flex-direction: column-reverse;

                & > div {

                        margin: 20% 0;
                        width: 100%;

                        li {
                                margin: 10% 0;
                        }
                }
        }
`

const Left = styled.div`
        
        h4 {
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
                color: ${({ theme }) => theme.ft};
        }
`

const LinkWr = styled.ul`
        
        list-style: none;
        margin: 5vh 0;

        li {

                margin: 20% 0;

                a {
                        font-family: 'Open Sans', sans-serif !important;
                        font-weight: 300 !important;
                        text-decoration: none;
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

const Footer = props => {

        return (
                <Container className='wrap'>
                        <Left>
                                <Logo id='logo-foot' />
                                <Links />
                                <h4>visit my other sites</h4>
                        </Left>
                        <Right>
                                <div className='heading'>
                                        <h1>LET&apos;S</h1>
                                        <h1>COLLA</h1>
                                        <h1>BORATE</h1>
                                </div>
                        </Right>
                </Container>
        )
}

const Links = props => (
        <LinkWr {...props}>
                <li>
                        <Link to='/#hero'>
                                HOME
                        </Link>
                </li>
                <li>
                        <Link to='/#about'>
                                ABOUT
                        </Link>
                </li>
                <li>
                        <Link to='/#contact'>
                                CONTACT
                        </Link>
                </li>
                <li>
                        <Link to='/projects'>
                                PROJECTS
                        </Link>
                </li>
        </LinkWr>
)

Footer.propTypes = {

}

export default Footer