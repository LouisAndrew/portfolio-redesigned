import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.footer`

        background-color: ${({ theme }) => theme.dark};

        .wrapper {

        }
`

const LinkWrapper = styled.ul`
        
        list-style: none;

        display: flex;
        justify-content: space-evenly;

        a {
                text-decoration: none;
        }

        @media screen and ( max-width: 640px ) {

                flex-direction: column;

                li {
                        padding: 10px 0;
                }
        }
`

const Footer = () => {

        return (
                <Container className='wrap'>
                        <div className="wrapper">
                                <Links />
                        </div>
                </Container>
        )
}

const Links = () => (
        <LinkWrapper data-testid='links-wrapper'>
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
        </LinkWrapper>
)

export default Footer