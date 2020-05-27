import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Tech from '../../techs/tech'

const Container = styled.div`
        
        display: flex;
`

const FilterIndi = ({ filter }) => {

        console.log(filter)

        return (
                <Container>
                        {
                                filter && filter.map( tech => <Tech key={tech} techName={tech} /> )
                        }
                </Container>
        )
}

FilterIndi.propTypes = {

}

export default FilterIndi
