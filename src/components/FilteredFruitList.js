import React, { Component } from 'react';

const FilteredFruitList = (props) => {
    const list = !props.filter || props.filter === 'all' ? props.fruit : props.fruit.filter(fruit => fruit.fruit_type === props.filter);

    return (
      <ul className="fruit-list">
        {list.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
    );
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: []
}

//
//   render() {
    // const list = !this.props.filter || this.props.filter === 'all' ? this.state.items : this.state.items.filter(i => i.fruit_type === this.props.filter);
    //
    // return (
    //   <ul className="fruit-list">
    //     {list.map((item, index) => <li key={index}>{item.char}</li>)}
    //   </ul>
    // );
//   }
// }

export default FilteredFruitList;
