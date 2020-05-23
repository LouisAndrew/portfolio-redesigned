import React from 'react'
import PropTypes from 'prop-types'

import Tech from '../../components/techs/tech'

const TechPreview = ({ entry, getAsset }) => {

        const data = entry.getIn( ['data'] ).toJS()

        return data ? (
                <Tech
                        techName={data.techName}
                />
        ) : (
                <div>Loading..</div>
        )
}

TechPreview.propTypes = {
        
        entry: PropTypes.shape({
                getIn: PropTypes.func,
        }).isRequired,
        getAsset: PropTypes.func.isRequired,
}

export default TechPreview
