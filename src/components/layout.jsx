import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import useGoogleFonts from '../hooks/useGoogleFonts'
import Nav from './nav'

const Layout = ({ children }) => {

        const filterColor = (colors, id) => colors.filter( color => color.colorID === id )[0].colorHex

        const  data = useStaticQuery( graphql`
                query ThemeQuery {
                        markdownRemark(frontmatter: {templateKey: {eq: "theme"}}) {
                                frontmatter {
                                        themeColors {
                                                colorHex
                                                colorID
                                        }
                                }
                        }
                }
        ` )

        const { themeColors } = data.markdownRemark.frontmatter

        const theme = {

                bg: filterColor( themeColors, 'bg' ),
                ft: filterColor( themeColors, 'ft' ),
                dark: filterColor( themeColors, 'dark' ),
                red: filterColor( themeColors, 'red' ),
                blue: filterColor( themeColors, 'blue' ),

                center: () => (`
                        display: flex;
                        align-items: center;
                        justify-content: center;
                `)
        }

        const Global = createGlobalStyle`

                * {
                        padding: 0;
                        margin: 0;
                        box-sizing: border-box;
                }

                html {
                        scroll-behavior: smooth;

                        &::-webkit-scrollbar {
                                width: 8px;
                                padding: 0 2px;
                        }

                        &::-webkit-scrollbar-track {
                                background-color: ${ theme.bg };
                        }

                        &::-webkit-scrollbar-thumb {

                                width: 80%;
                                background-color: ${ theme.dark };
                                border-radius: 8px;
                                opacity: .6;
                        }
                }

                h1 {
                        font-size: 100px;
                        font-family: 'Roboto', sans-serif;
                }

                h2 {
                        font-size: 60px;
                        font-family: 'Roboto', sans-serif;
                }

                h3 {
                        font-size: 32px;
                        font-family: 'Roboto', sans-serif;
                }

                p {
                        font-size: 22px;
                        font-family: 'Open Sans', sans-serif;
                }

                button, a {
                        font-size: 24px;
                        font-weight: bold;
                        font-family: 'Open Sans', sans-serif;
                }

                h1, h2, h3, p, button, a {
                        color: ${theme.ft}
                }

                .wrap {

                        padding: 8%;
                }

                @media screen and ( max-width: 1440px ) {
                        
                        p, button, a {
                                font-size: 1.6vw;
                        }
                }

                @media screen and ( max-width: 840px ) {
                        
                        h1 {
                                font-size: 90px;
                        }

                        .wrap:not(:first-child) {
                                margin-top: -1%;
                        }
                }

                @media screen and ( max-width: 464px ) {
                        
                        h1 {
                                font-size: 60px;
                        }

                        h2 {
                                font-size: 40px;
                        }

                        h3 {
                                font-size: 24px;
                        }
/* 
                        p, a, button {
                                font-size: 16px;
                        }  */

                        p, a, button {
                                font-size: 3.5vw;
                        }
                }
        `

        useGoogleFonts()

        return (
                <>
                        <Global />
                        <ThemeProvider theme={theme}>
                                <main>
                                        <Nav />
                                        { children }
                                </main>
                        </ThemeProvider>
                </>
        )
}

Layout.propTypes = {

        children: PropTypes.node.isRequired,
}

export default Layout
