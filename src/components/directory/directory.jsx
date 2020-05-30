import React, { Component } from 'react'
import MenuItem from '../menuItem/menuItem';
import './directory.scss'

class Directory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sections: [
        {
          title: 'HATS',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          size: 'small',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'JACKETS',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          size: 'small',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'SNEAKERS',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          size: 'small',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'WOMENS',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'MENS',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    }
  }

  render() {
    return (
      <div className="directoryMenu">
        {
          this.state.sections.map(({ id, ...otherProps }) => (
            <MenuItem key={id} {...otherProps} />
          ))
        }
      </div>
    )
  }
}

export default Directory;
