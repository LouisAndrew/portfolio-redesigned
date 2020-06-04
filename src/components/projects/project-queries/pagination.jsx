import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from '../../button'

const Container = styled.ul`
        
        list-style: none;

        display: flex;
        justify-content: center;

        /* h3 {
                font-weight: bold;

                &:hover {
                        cursor: pointer;
                }
        } */
`

const PageLink = styled.li`
        
        padding: 5px 10px;

        transition: .2s;
        color: ${({ theme }) => theme.ft};
        background-color: ${props => props.$active && props.theme.red};

        font-weight: bold;
        font-family: 'Roboto', sans-serif;

        &:hover {

                background-color: ${props => !props.$active && props.theme.red};
                cursor: pointer;
        }
`

const Pagination = ({ pageNum, store, perPage, navigatePage }) => {

        const NUM_OF_LINKS = 5
        const totalPage = Math.ceil( store.length / perPage )

        const createSmallLinks = ( numOfPages ) => {

                let arr = [ ]
                for ( let i = 1; i <= numOfPages; i++ ) {
                        arr = [ ...arr, i ]
                }

                return arr
        }

        const createLink = ( currPage, numOfLinks, numOfPages ) => {

                // guard clause for page nums smaller than 1..
                if ( currPage > numOfPages ) return [ ]
                if ( numOfLinks > numOfPages ) return createSmallLinks( numOfPages )

                let linksArray = [ ]
                for ( let i = 0, j = -2; i < numOfLinks; i++, j++ ) {
                        linksArray = [ ...linksArray, currPage + j ]
                }

                return linksArray
                                // eslint-disable-next-line no-nested-ternary
                                .map( link => link > numOfPages ? link - 4 : link )
                                .sort()
        }

        const links = createLink( pageNum, NUM_OF_LINKS, totalPage )

        return (
                <Container>
                        {
                                links.length > 0 ? (
                                        links.map( (link, i) => <PageLink onClick={() => navigatePage(link)} key={link} $active={link === pageNum}>{link}</PageLink> )
                                ) : (
                                        <Button onClick={() => navigatePage(1)} bColor='blue' color='ft'>Go Back</Button>
                                )
                        }
                </Container>
        )
}

Pagination.propTypes = {

        pageNum: PropTypes.number.isRequired,
        store: PropTypes.arrayOf(
                PropTypes.object,
        ).isRequired,
        perPage: PropTypes.number.isRequired,
        numOfPages: PropTypes.number,
}

Pagination.defaultProps = {

        numOfPages: 6
}

export default Pagination
