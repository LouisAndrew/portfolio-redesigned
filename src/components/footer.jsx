import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Logo from '../../static/assets/Logo.svg'

const Container = styled.footer`

        background-color: ${({ theme }) => theme.dark};
        padding-top: 0 !important;
        padding-bottom: 0 !important;

        .wrapper {

                padding: 10% 10%;
                border-top: 2px solid ${({ theme }) => theme.ft};

                display: flex;
                justify-content: space-between;

                .lower {
                        width: 45%;
                }

                &.plain {
                        border-color: rgba(0, 0, 0, 0);
                }

                @media screen and ( max-width: 640px ) {
                        
                        flex-direction: column;

                        .lower, ul {
                                width: 100% !important;
                        }
                }
        }
`

const LinkWrapper = styled.ul`
        
        list-style: none;

        display: flex;
        flex-direction: column;

        width: 45%;

        li {
                padding: 2vh;

                a {
                        text-decoration: none;
                }
        }  

        @media screen and ( max-width: 640px ) {

                padding-top: 3vh;

                li {
                        padding-left: 0;
                }
        }
`

const Footer = () => {

        useEffect(() => {

                if ( document.location.pathname !== '/' ) {
                        const foot = document.querySelector( 'footer .wrapper' )
                        if ( foot ) foot.classList.add('plain')
                }
        })

        return (
                <Container className='wrap'>
                        <div className="wrapper">
                                <div className="lower">
                                        <Logo id='logo-footer' />
                                        <p>Built with Gatsby, Netlify CMS and ❤</p>
                                </div>
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