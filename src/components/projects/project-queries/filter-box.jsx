import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.form`
        
        input {
                display: none;
        }
`

const Label = styled.label`
        
`

const FilterBox = ({ techs, setFilter }) => (
        <Container>
                {
                        techs && techs.map( (tech, i) => (
                                <>
                                        <input key={tech} type='checkbox' id={tech} />
                                        <Label onClick={() => setFilter(tech)} for={tech}>
                                                {tech}
                                        </Label>
                                </>
                        ) )
                }
        </Container>
)

FilterBox.propTypes = {

}

export default FilterBox
