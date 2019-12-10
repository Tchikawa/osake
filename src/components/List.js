import React from 'react';

export default class List extends React.Component {
  componentDidMount() {
    this.props.getOsakeList()
  }

  render() {
    console.log(this.props.osakeList)
    return (
      <ul className='cp_list'>
        {this.props.osakeList.map(osake => <li>{osake.name}</li>)}
      </ul>
    );
  }
}
