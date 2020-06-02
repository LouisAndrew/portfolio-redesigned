import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.footer`

        background-color: ${({ theme }) => theme.dark};

        .wrapper {
                border: 2px solid ${({ theme }) => theme.ft};
                border-radius: 6px;
                padding: 5% 2%;

                @media screen and ( max-width: 640px ) {
                        
                        padding: 5% 10%;
                }
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
        <LinkWrapper>
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

Footer.propTypes = {

}

export default Footer