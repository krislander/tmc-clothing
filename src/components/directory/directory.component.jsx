import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
        title: "Hats",
        imageUrl: 'https://i.ibb.co/Y7rtYZW/done2-3.png',
        id: '1',
        linkUrl: 'hats'
    },
    {
        title: "Jackets",
        imageUrl: 'https://i.ibb.co/BqQV2W0/done5-3.png',
        id: '2',
        linkUrl: ''
    },
    {
        title: "Jeans",
        imageUrl: 'https://i.ibb.co/q79bz8W/pants.png',
        id: '3',
        linkUrl: ''
    },
    {
        title: "Sneakers",
        imageUrl: 'https://i.ibb.co/k2KjCfK/shoes.png',
        size: 'large',
        id: '4',
        linkUrl: ''
    },
    {
        title: "Other",
        imageUrl: 'https://i.ibb.co/6yg1m1c/shanochanta.png',
        size: 'large',
        id: '5',
        linkUrl: ''
    }]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
