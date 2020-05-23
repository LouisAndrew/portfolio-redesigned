import React from 'react'
import styled from 'styled-components'

import useTechs from '../../hooks/useTechs'

const Container = styled.div`
        
        display: flex;
        align-items: center;
        
        background-color: ${({ theme }) => theme.bg};

        padding: .5vh 1vh;
        margin: 0 2vh 2vh 0;
        border-radius: calc( 4vh / 2 );

        img {
                height: 2vh;
                width: 2vh;
                border-radius: 50%;
        }

        p {
                margin-top: 0 !important;
                margin-left: 2vh;
                padding-right: 1vh;
        }

        @media screen and ( max-width: 464px ) {
                
                img {
                        height: 1.5vh;
                        width: 1.5vh;
                }
        }
`

const Tech = ({ techName }) => {
        
        const tech = useTechs(techName)

        const { frontmatter: data } = tech.node ? tech.node : { }
        // const { icon, name } = data && data

        console.log(data)

        return (
                <Container>
                        {
                                data && (
                                        <>
                                                <img src={`/${data.icon}`} alt={data.name} />
                                                <p>{data.name}</p>
                                        </>
                                )
                        }
                </Container>
        ) 
}

export default Tech
