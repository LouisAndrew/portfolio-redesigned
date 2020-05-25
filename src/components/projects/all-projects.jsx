import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useLocation, useNavigate } from '@reach/router'

import ProjectItem from './project-item-all'

const Container = styled.section`
        
        background-color: ${({ theme }) => theme.bg};
`

const ProjectCont = styled.div`
        
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;

        padding: 10% 0;

        .proj {

                width: 30% !important;

                
        }

        @media screen and ( max-width: 840px ) {

                .proj {

                        width: 45% !important;
                }
        }

        @media screen and ( max-width: 464px ) {

                padding: 20% 0;
                        
                .proj {
                        width: 100% !important; 
                }
        }
`

export const reformat = location => {

        if ( !location.includes('?') ) return { }

        const query = location.split('?')[1]
        const splitMultiple = query.split('&')

        return splitMultiple.reduce( (o, key) => {
                
                const objKey = key.split('=')[0].replace('_', ' ')
                const tempValue = key.split('=')[1].replace('_', ' ')

                const objVal = tempValue.includes('+') ? 
                        tempValue
                                .split('+') : 
                        tempValue

                return {
                        ...o,
                        [objKey]: objVal
                }
        }, { } )
}

export const filterInFilter = (data, array) => {

        if ( typeof array !== 'object' ) return [ ]

        return array.filter( dt => dt.node.frontmatter.techUsed.some( tech => tech.toUpperCase() === data.toUpperCase() ) )
}

// TODO: pagination
// TODO: sorting
// TODO: map projects.
// TODO filter.
const AllProjects = ({ data }) => {

        const ITEM_PER_PAGE = 6

        const location = useLocation()

        const { page, sort } = reformat(location.search)
        const navigate = useNavigate()

        const [ pageNum, setPageNum ] = useState( page || 1 )
        const [ sortBy, setSortBy ] = useState( sort || '' )
        const [ store, setStore ] = useState([ ])
        const [ items, setItems ] = useState([ ])

        const sortFunction = (full, sortState) => {

                return typeof sortState === 'object' ? sortState.reduce( (before, value) => filterInFilter( value, before ), full ) : filterInFilter( sortState, full )
        } 

        useEffect(() => {

        }, [])

        useEffect(() => {

        }, [ pageNum, sortBy ])

        return (
                <Container className='wrap'>
                        <ProjectCont>
                                {
                                        data && data.map( (dt, i) => <ProjectItem className='proj' key={i} projectName={dt.node.frontmatter.projectName} snapshot={dt.node.frontmatter.snapshot} /> )
                                }
                        </ProjectCont>
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
