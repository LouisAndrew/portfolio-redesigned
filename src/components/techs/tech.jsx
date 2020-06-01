import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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

        @media screen and ( max-width: 640px ) {
                
                img {
                        height: 1.5vh;
                        width: 1.5vh;
                }
        }
`

const Tech = ({ techName, className, onClick }) => {
        
        const tech = useTechs(techName)

        const { frontmatter: data } = tech.node ? tech.node : { }
        // const { icon, name } = data && data

        return (
                <Container data-testid='tech' className={className} onClick={onClick}>
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

Tech.propTypes = {

        techName: PropTypes.string.isRequired,
        className: PropTypes.string,
        onClick: PropTypes.func,
}

Tech.defaultProps = { 

        className: '',
        onClick: () => { }
}

export default Tech
