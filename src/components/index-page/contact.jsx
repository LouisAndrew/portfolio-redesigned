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
                align-items: center;

                & > div {
                        width: fit-content;
                }
        }
`

const Heading = styled.div`
        
        border-right: 3px solid ${({ theme }) => theme.ft};

        @media screen and ( max-width: 464px ) {

                border-right: none;
                border-bottom: 3px solid ${({ theme }) => theme.ft};
                
                padding-right: 0;
                padding-bottom: 10%;

                h1 {
                        text-align: left;
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
        }
`

const CtItem = styled.div`
        
        display: flex;
        align-items: center;

        padding: 5%;
        
        img {

                margin-right: 10%;
        }

        @media screen and ( max-width: 840px )  {

                img {
                        height: 5vh;
                        width: 5vh;
                }
        }

        @media screen and ( max-width: 840px ) and ( orientation: landscape ) {
                img {
                        height: 5vw;
                        width: 5vw;
                }
        }

        @media screen and ( max-width: 464px ) {

                img {
                        height: 8vw;
                        width: 8vw;
                }
        }
`

const Contact = ({ contactLists, heading, subheading, headingList }) => {

        return (
                <Container id='contact' className='wrap'>
                        <Heading>
                                {
                                        headingList.map( (head, i) => <h1 key={i}>{head.h}</h1> )
                                }
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
