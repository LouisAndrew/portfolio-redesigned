import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.section`
        
        background-color: ${({ theme }) => theme.bg};
        display: flex;

        & > div {
                width: 50%;
        }

        @media screen and ( max-width: 840px ) {
                
                flex-direction: column;
                align-items: center;

                padding-bottom: 20% !important;

                & > div {
                        width: fit-content;
                }
        }
`

const Heading = styled.div`
        
        @media screen and ( max-width: 840px ) {

                border-right: none;
                
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
/* 
        @media screen and ( max-width: 840px ) {
                
                padding-left: 5%;
        } */

        @media screen and ( max-width: 840px ) {

                padding-left: 0;

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
                        <Heading data-testid='con-heading'>
                                {
                                        headingList.map( (head, i) => <h1 key={head}>{head.h}</h1> )
                                }
                        </Heading>
                        <Contacts data-testid='con-list'>
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
        headingList: PropTypes.arrayOf(
                PropTypes.shape({
                        h: PropTypes.string,
                }),
        ),
}

Contact.defaultProps = {

        contactLists: [],
        subheading: '',
        headingList: [ ]
}

ContactItem.propTypes = {

        icon: PropTypes.string.isRequired,
        social: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        redirect: PropTypes.bool,
}

ContactItem.defaultProps = {

        redirect: false,
}

export default Contact
