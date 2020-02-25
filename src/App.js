import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoItems from './TodoItems'

class App extends Component {
  constructor() {
    super()
    this.inputElement = React.createRef();
    this.state = {
      edit: false,
      items: [],
      currentItem: { text: '', key: '' },
    }
  }
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    console.log(currentItem);
    this.setState({
      currentItem,
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    console.log(newItem);
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(
      item => {
        return item.key != key
      })
    this.setState({
      items: filteredItems,
    })
  }

  EditHandle = (key, value) => {

    this.setState({
      edit: true,
      key: key,
      text: value
    });
  }

  updateItem = key => {
    this.setState({
      EditData: this.state.items.map(item => {
        if (item.key === this.props.key) {
          item['text'] = 'berubah';
          return item;
        }

        return item;
      })
    });

    this.setState({
      edit: false
    });
  }

  render() {
    return (
      <div className="App" >
        <TodoList addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
          updateItem = {this.updateItem}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} EditHandle={this.EditHandle}  />
      </div>
    )
  }
}

export default App;
