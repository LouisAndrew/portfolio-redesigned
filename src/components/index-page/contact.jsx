import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.section`
        
        background-color: ${({ theme }) => theme.bg};
        display: flex;

        & > div {
                width: 50%;
        }

        @media screen and ( max-width: 464px ) {
                
                flex-direction: column;

                & > div {
                        width: 100%;
                }
        }
`

const Heading = styled.div`
        
        border-right: 3px solid ${({ theme }) => theme.ft};
        /* padding-right: 5%; */

        @media screen and ( max-width: 464px ) {

                border-right: none;
                border-bottom: 3px solid ${({ theme }) => theme.ft};
                
                padding-right: 0;
                padding-bottom: 10%;

                h1 {
                        text-align: center;
                }
        }
`

const Contacts = styled.div`
        
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        padding-left: 10%;

        @media screen and ( max-width: 840px ) {
                
                padding-left: 5%;
        }

        @media screen and ( max-width: 464px ) {

                padding-left: 0;
                padding-top: 10%;

                align-items: center;

                img {
                        
                        height: 35px;
                        width: 35px;
                }
        }
`

const CtItem = styled.div`
        
        display: flex;
        align-items: center;

        padding: 5%;
        
        img {

                margin-right: 10%;
        }

        @media screen and ( max-width: 464px )  {

                
        }
`

const Contact = ({ contactLists, heading, subheading }) => {

        // same as expertees, not sure if necessary..
        const splittedHeading = heading.split(' ')
        const splitLength = splittedHeading.length - 1

        return (
                <Container className='wrap'>
                        <Heading>
                                <h1>
                                        {
                                                heading
                                                        .split( splittedHeading[ splitLength ] )[0]
                                        }
                                </h1>
                                <h1>{ splittedHeading[ splitLength ] }</h1>
                        </Heading>
                        <Contacts>
                                {
                                        contactLists.map( (contact, i) => <ContactItem key={i} {...contact} /> )
                                }
                        </Contacts>
                </Container>
        )
}

const ContactItem = ({ icon, social, link, value, redirect }) => {

        const item = redirect ? 
                                <a href={link}>{value}</a> :
                                <p>{value}</p>

        return (
                <CtItem>
                        <img src={icon} alt={social} />
                        { item }
                </CtItem>
        )
}

Contact.propTypes = {
        
        contactLists: PropTypes.arrayOf(
                PropTypes.shape({
                        icon: PropTypes.string.isRequired,
                        social: PropTypes.string,
                        link: PropTypes.string,
                        value: PropTypes.string.isRequired,
                        redirect: PropTypes.bool
                }),
        ),
        heading: PropTypes.string.isRequired,
        subheading: PropTypes.string,
}

Contact.defaultProps = {

        contactLists: [],
        subheading: '',
}

ContactItem.propTypes = {

        icon: PropTypes.string.isRequired,
        social: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        redirect: PropTypes.bool.isRequired
}

export default Contact
