import { Component } from "react";

function TodoItem(props){
    return <li>props.name<button onClick={props.toggle}></button></li>
}

export default class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            todoList:[],
            input_value:""
        }
    }

    handleDelete(event, id){
        this.setState({
            todoList:[...this.state.todoList.slice(0, id), ...this.state.todoList.slice(id+1)]
        })
    }

    handleChange(event){
        this.setState({
            input_value:event.target.value
        })
    }

    handleSubmit(){
        this.setState({
            todoList:[...this.state.todoList, this.state.input_value]
        })
    }

    render(){
        const self=this;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.input_value}></input>
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {this.state.todoList.map((task, index) => {
                        return <TodoItem name={task} id={index} toggle={() => self.handleDelete(index)} />
                    })}
                </ul>
            </div>
        );
    }
}