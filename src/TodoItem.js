import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render () {
    const {content} = this.props;
    return <li 
             key={this.props.index} 
             onClick={this.handleClick}
             >
              {content}
             </li>
  }
  handleClick () {
    const {onDelete,index} = this.props;
    onDelete(index)
  }
  shouldComponentUpdate (nextPros, nextState) {
    if (nextPros.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }
}
TodoItem.propTypes = {
  content: PropTypes.string,
  onDelete: PropTypes.func,
  index: PropTypes.number
}
TodoItem.defaultProps = {
}
export default TodoItem
