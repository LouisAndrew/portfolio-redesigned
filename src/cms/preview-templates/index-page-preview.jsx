import React from 'react'
import PropTypes from 'prop-types'

import { IndexPageTemplate } from '../../templates/index'

const IndexPagePreview = ({ entry, getAsset }) => {
        
        const data = entry.getIn( ['data'] ).toJS()
        
        return data ? (
                <IndexPageTemplate
                        title={data.title}
                        heading={data.heading}
                        subheading={data.subheading}
                        cta={data.cta}
                        expertees={data.expertees || []}
                        contact={data.contact || []}
                />
        ) : (
                <div>Loading..</div>
        )
}

IndexPagePreview.propTypes = {

        entry: PropTypes.shape({
                getIn: PropTypes.func,
        }).isRequired,
        getAsset: PropTypes.func.isRequired,
}


export default IndexPagePreview
