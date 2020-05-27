import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useLocation, useNavigate } from '@reach/router'

import ProjectItem from './project-item-all'
import Pagination from './project-queries/pagination'
import Filter from './project-queries/filter'
import FilterIndi from './project-queries/filter_indicatior'

const Container = styled.section`
        
        ${({ theme }) => theme.center()};
        flex-direction: column;

        background-color: ${({ theme }) => theme.bg};
        min-height: 70vh;
`

const ProjectCont = styled.div`
        
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        width: 100%;

        padding: 5% 0 10%;

        .proj {

                width: 30% !important;

                
        }

        @media screen and ( max-width: 840px ), screen and ( max-width: 1100px ) and ( orientation: portrait ) {

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

        // return if the url doesn't have any params
        if ( !location.includes('?') ) return { }

        // split the location -> get url params then splitting multiple params (indicated with &)
        const query = location.split('?')[1]
        const splitMultiple = query.split('&')

        // reduce the array into an object.
        return splitMultiple.reduce( (o, key) => {

                // splitting each parameter -> also replace spaced character on params(_) with blankspace ( )
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

export const formatSearch = arr => typeof arr !== 'object' ? 
                                                        arr : 
                                                        arr.map( item => item.replace(' ', '_') ).join('+')

// TODO: pagination
// TODO: sorting
// TODO: map projects.
// TODO filter.
const AllProjects = ({ data }) => {

        const ITEM_PER_PAGE = 6

        const location = useLocation()

        const { page, filter } = reformat(location.search)
        const navigate = useNavigate()

        const [ pageNum, setPageNum ] = useState( parseInt(page, 10 ) || 1 )
        const [ filterBy, setFilterBy ] = useState( typeof filter === 'string' ? [ filter ] : filter || [ ] )
        const [ store, setStore ] = useState([ ])
        const [ items, setItems ] = useState([ ])

        const navigatePage = i => {

                navigate(`/projects?page=${i}`)
                setPageNum( i )
        }

        const setFilter = flt => {
                
                if ( filterBy && filterBy.some( item => item === flt ) )  {
                        const newRemoved = filterBy.filter( item => item !== flt )
                        const query = formatSearch( newRemoved )

                        setFilterBy( newRemoved )
                        navigate(`/projects?page=${pageNum}&filter=${query}`)

                        return
                }

                // check if filterBy is an array -> format into a query.
                // eslint-disable-next-line no-nested-ternary
                const temp = [ ...filterBy, flt ]
                const query = formatSearch( temp )

                setFilterBy( temp )
                navigate(`/projects?page=${pageNum}&filter=${query}`)
        }

        const filterFunction = (full, filterState) => {

                return typeof filterState === 'object' ? filterState.reduce( (before, value) => filterInFilter( value, before ), full ) : filterInFilter( filterState, full )
        } 

        const paginate = (perPage, itemStore, pageNumber) => {
                const from = ( pageNumber - 1 ) * perPage
                const to = from + perPage > itemStore.length - 1 ? itemStore.length : from + perPage

                return itemStore.slice( from, to )
        }       

        const filterAndPaginate= () => {

                const storeTemp = filterBy ? filterFunction( data, filterBy ) : data
                const toDisplay = paginate( ITEM_PER_PAGE, storeTemp, pageNum )

                setStore( storeTemp )
                setItems( toDisplay )
        }

        useEffect(() => {

                if ( !items ) 
                        filterAndPaginate() 
        }, [ ])

        useEffect(() => {

                filterAndPaginate( )
        }, [ pageNum, filterBy ])

        return (
                <Container className='wrap'>
                        <Filter setFilter={setFilter} />
                        <FilterIndi filter={filterBy} setFilter={setFilter} />
                        <ProjectCont>
                                {
                                        items.length > 0 ? 
                                                items.map( (dt, i) => <ProjectItem className='proj' key={i} projectName={dt.node.frontmatter.projectName} snapshot={dt.node.frontmatter.snapshot} /> )
                                                : (
                                                        <h2>No items found..</h2>
                                                )
                                }
                        </ProjectCont>
                        <Pagination pageNum={pageNum} store={store} perPage={ITEM_PER_PAGE} navigatePage={navigatePage} />
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
