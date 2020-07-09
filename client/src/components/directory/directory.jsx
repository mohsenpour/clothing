import React from 'react'
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directorySelectors';
import { createStructuredSelector } from 'reselect';
import MenuItem from '../menuItem/menuItem';
import './directory.scss'

const Directory = ({ sections }) => {
  return (
    <div className="directoryMenu">
      {
        sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps, null)(Directory);
