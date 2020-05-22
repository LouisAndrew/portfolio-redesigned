import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.section`
        
        background-color: ${({ theme }) => theme.bg};
`
// TODO: pagination
// TODO: sorting
// TODO: map projects.
// TODO filter.
const AllProjects = ({ data }) => {

        console.log(data)

        return (
                <Container className='wrap'>
                        
                </Container>
        )
}

AllProjects.propTypes = {

        data: PropTypes.arrayOf(
                PropTypes.shape({
                        node: PropTypes.objectOf( PropTypes.object ).isRequired
                })
        ).isRequired
}

export default AllProjects
