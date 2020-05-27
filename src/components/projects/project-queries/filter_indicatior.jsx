import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Tech from '../../techs/tech'

const Container = styled.div`
        
        width: 100%;

        display: flex;
        flex-flow: row wrap;
        margin-top: 2%;

        .tech-filter {

                background-color: ${({ theme }) => theme.dark} !important;
                border: 1px solid ${({ theme }) => theme.dark};
                transition: .2s;

                &:hover {
                        cursor: pointer;
                        border-color: ${({ theme }) => theme.ft};
                }
        }
`

const FilterIndi = ({ filter, setFilter }) => (
        <Container>
                {
                        filter && filter.map( tech => <Tech onClick={() => setFilter(tech)} className='tech-filter' key={tech} techName={tech} /> )
                }
        </Container>
)

FilterIndi.propTypes = {

        filter: PropTypes.arrayOf(
                PropTypes.string,
        ).isRequired,
        setFilter: PropTypes.func.isRequired,
}

export default FilterIndi
