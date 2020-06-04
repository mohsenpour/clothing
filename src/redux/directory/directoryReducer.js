const initialState = {
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
};

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default directoryReducer;