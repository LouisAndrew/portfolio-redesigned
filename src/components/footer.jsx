import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.footer`

        background-color: ${({ theme }) => theme.dark};
        ${({ theme }) => theme.center()};
        flex-direction: column;

        min-height: 30vh;

        h5 {
                font-family: 'Roboto', sans-serif;
                font-size: 18px;
                color: ${({ theme }) => theme.ft};

                @media screen and ( max-width: 840px ) {
                        
                        font-size: 16px;
                }

                @media screen and ( max-width: 640px ) {
                        
                        font-size: 14px;
                }
        }
`

const LinkWr = styled.ul`
        
        display: flex;
        justify-content: space-between;

        width: 100%;
        padding: 0 20% 5%;
        margin: 5% 0;
        list-style: none;
        border-bottom: 3px solid ${({ theme }) => theme.ft};

        li a {
                text-decoration: none;

                &:hover {
                        cursor: pointer;
                }
        }

        @media screen and ( max-width: 640px ) {
                
                padding: 0 0 10%;
                margin: 10% 0;
        }
`

const Footer = props => {


        return (
                <Container className='wrap'>
                        <Links />
                        <h5>visit me on</h5>
                </Container>
        )
}

const Links = props => (
        <LinkWr {...props}>
                <li>
                        <Link to='/#hero'>
                                Home
                        </Link>
                </li>
                <li>
                        <Link to='/#about'>
                                About
                        </Link>
                </li>
                <li>
                        <Link to='/#contact'>
                                Contact
                        </Link>
                </li>
                <li>
                        <Link to='/projects'>
                                Projects
                        </Link>
                </li>
        </LinkWr>
)

export default Footer