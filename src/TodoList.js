import React, { Component } from 'react'

class TodoList extends Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }

    renderEditForm() {
        /*if (this.state.edit) {*/
          return <form onSubmit={this.updateItem(this.props.key)}>
            <input type="text" name="updatedItem" className="item" defaultValue={this.props.text} />
            <button className="update-add-item">Update</button>
          </form>
        /*}*/
      }
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                {this.renderEditForm()}
                    <form onSubmit={this.props.addItem}>
                        <input placeholder="Tugas"
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput} />
                        <button type="submit"> Tambah Tugas</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList;