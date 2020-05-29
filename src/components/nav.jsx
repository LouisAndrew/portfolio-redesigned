import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Logo from '../../static/assets/Logo.svg'
import Button from './button'

const Container = styled.nav`
        
        padding-top: 1vh !important;
        padding-bottom: 1vh !important;
        margin-top: 0 !important;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: ${({ theme }) => theme.bg};

        #menu {
                display: none;
        }

        @media screen and ( max-width: 464px ) {

                #menu {
                        display: block;
                }
        }
`

const LinkWr = styled.ul`
        
        display: flex;

        list-style: none;

        a {

                ${({ theme }) => theme.center()};

                padding: 1vh 3vh;
                border-bottom: 2px solid ${({ theme }) => theme.bg};

                text-decoration: none;
                transition: .2s;

                font-family: 'Open Sans', sans-serif !important;
                font-weight: 300 !important;
                font-size: 20px;

                &:hover {

                        border-color: ${({ theme }) => theme.ft};
                }

                @media screen and ( max-width: 840px ) {
                        
                        font-size: 16px;
                }
        }

        @media screen and ( max-width: 464px ) {
                
                position: absolute;
                bottom: 0;
                right: 8%;
                transform: translateY(100%);
                border-radius: 3px;

                flex-direction: column;
                align-self: flex-end;

                background-color: ${({ theme }) => theme.dark};
                overflow: hidden;
                max-height: 0;
                transition: .2s;
                transition-timing-function: ease-in;

                a {
                        padding: 2vh 4vh;
                        border: none;
                }

                &.active {
                        max-height: 100vh;
                }
        }
`

const Nav = () => {

        const [ menuMobileActive, setMenuMobileActive ] = useState(false)

        const clickMenu = () => {

                setMenuMobileActive( !menuMobileActive )
        }

        useEffect(() => {

                const links = document.getElementById('links')

                if ( menuMobileActive ) {

                        links.addEventListener('click', () => {
                                setMenuMobileActive(false)
                                links.removeEventListener('click', () => {})
                        })
                }
        }, [ menuMobileActive ])

        return (
                <Container className='wrap'>
                        <Logo id='logo' />
                        <Links id='links' className={menuMobileActive ? 'active' : ''} />
                        <Button onClick={clickMenu} id='menu' bColor='bg' color='ft'>MENU</Button>
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

export default Nav
