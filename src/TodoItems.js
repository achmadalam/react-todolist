import React, { Component } from 'react'
class TodoItems extends Component {
  createTasks = item => {
    return (
      <div>
        <li key={item.key} > {item.text} &nbsp;
        <button onClick={() =>
          this.props.deleteItem(item.key)
        }>Hapus</button> &nbsp;
        <button onClick={() =>
          this.props.EditHandle(item.key, item.text)
        }>Edit</button> 
        </li>
      </div>
    )
  }

  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)
    return <ul className="theList">{listItems}</ul>
  }
}
export default TodoItems