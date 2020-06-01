import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Search from '../../../../static/assets/search.svg'

const Container = styled.form`

        width: fit-content;
        padding: 5%;
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;

        & > label {

                display: flex;
                align-items: center;

                width: fit-content;
                white-space: nowrap;

                #search {
                        margin-right: 5px;
                        fill: #fff;
                }
        }

        .techs-filter {

                display: flex;
                flex-direction: column;

                margin-top: 10%;
                position: absolute;
                transform: translateY(10%);
                z-index: 4;
                max-height: 0;

                transition: .2s;
                overflow: hidden;
                background-color: ${({ theme }) => theme.dark};

                &.active {

                        max-height: 50vh;
                        overflow-y: scroll;

                        -ms-overflow-style: none;
                }

                &::-webkit-scrollbar {

                        display: none;
                }
        }

        input {
                display: none;
        }
`

const Label = styled.label`
        
        padding: 10% 15%;
        transition: .2s;

        display: flex;
        align-items: center;

        img {
                height: 25px;
                width: 25px;
                border-radius: 50%;

                margin-right: 15px;
        }

        &:hover {

                cursor: pointer;
                transform: translateY(-10px);
        }

        @media screen and ( max-width: 640px ) {

                padding: 10% 10%;

                &:hover {
                        transform: translate(0) !important;
                }
        }
`

const FilterBox = ({ techs, setFilter }) => {

        const setActive = () => {

                document.querySelector('.techs-filter').classList.toggle('active')
        }

        return (
                <Container>
                        <input type='checkbox' />
                        <label onClick={setActive}>
                                <Search id='search' />
                                filter by 
                        </label>
                        <div className='techs-filter'>
                                {
                                        techs && techs.map( (tech, i) => (
                                                <>
                                                        <input key={tech.name} type='checkbox' id={tech.name} />
                                                        <Label onClick={() => setFilter(tech.name)} for={tech.name}>
                                                                <img src={tech.icon} alt={tech.name} />
                                                                {tech.name}
                                                        </Label>
                                                </>
                                        ) )
                                }
                        </div>
                </Container>
        )
}

FilterBox.propTypes = {

        techs: PropTypes.arrayOf(
                PropTypes.string,
        ),
        setFilter: PropTypes.func.isRequired,
}

FilterBox.defaultProps = {

        techs: [ ]
}

export default FilterBox
