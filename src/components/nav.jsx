import React from 'react'
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

                padding: 1vh 2vh;
                border-bottom: 2px solid ${({ theme }) => theme.bg};

                text-decoration: none;
                transition: .2s;

                &:hover {

                        border-color: ${({ theme }) => theme.ft};
                }
        }

        @media screen and ( max-width: 464px ) {
                
                position: absolute;
                bottom: -380%;
                right: 8%;
                /* transform: translateX(8%); */
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

        const clickMenu = () => document.getElementById('links') && document.getElementById('links').classList.toggle('active')

        return (
                <Container className='wrap'>
                        <Logo id='logo' />
                        <Links id='links' />
                        <Button onClick={clickMenu} id='menu' bColor='bg' color='ft'>MENU</Button>
                </Container>
        )
}

const Links = props => (
        <LinkWr {...props}>
                <li>
                        <Link href='/#hero'>
                                Home
                        </Link>
                </li>
                <li>
                        <Link href='/projects'>
                                Projects
                        </Link>
                </li>
                <li>
                        <Link href='/#hero'>
                                About
                        </Link>
                </li>
                <li>
                        <Link href='/#hero'>
                                Contact
                        </Link>
                </li>
        </LinkWr>
)

export default Nav
