import React, {Component} from 'react';
import TodoItem from '../components/TodoItem';
import FormInput from '../components/FormInput';
import EditModal from '../components/EditModal';
import Image from 'react-bootstrap/Image';

import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

class Program extends Component {
    state= {
        todos : [
        {id:1, title:"Hermes"},
        {id:2, title:"Louis Vuitton"},
        {id:3, title:"Prada"},
        {id:4, title:"Gucci"},
        {id:5, title:"Louis Vuitton"},
        {id:6, title:"Hermes"},
        {id:7, title:"Prada"},
        {id:8, title:"Gucci"}
        ],
        isEdit: false,
        editData : {
            id :"",
            title :"" 
        }
    }
    openModal =(id, data)=> {
        this.setState ({
        isEdit : true,
        editData : {
            id,
            title : data
            }
        })
        }
    closeModal =()=> {
        this.setState ({
        isEdit : false
        })
        }

    deleteTask = id => {
        this.setState ({
        todos : this.state.todos.filter(item => item.id !== id)
        })
        }

    addTask = data => {
        const id = this.state.todos.length
        const newData = {
        id : id + 1,
        title : data
        }
        this.setState ({
        todos : [...this.state.todos, newData]
        })
        }

    update = () => {
        const {id, title} = this.state.editData
        const newData = {id, title}
        const newTodos = this.state.todos
        newTodos .splice((id-1), 1, newData )
        this.setState ({
        todos: newTodos ,
        isEdit: false,
        editData : {
        id : "",
        title :""
        }
        })
        }

    setTitle = e => {
        this.setState ({
        editData : {
        ... this.state.editData ,
        title : e.target.value
        }
        })
        }

    render() {
        const {todos}= this.state;
        return (
            <div style={{ marginLeft: '120px' }} className="dashboard">
                <h4>Stocks of Product</h4>
                <table className="product-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Code</th>
                            <th>Image</th>
                            <th>Buying Price</th>
                            <th>Status</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((item, index) => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{1768 + index}</td>
                                <td>
                                    <Image src={require('../images/bag_gucci1.jpg')} style={{ width: "50px", height: "50px", textAlign: "center"}} fluid />
                                </td>
                                <td>{43.70 + index}</td>
                                <td><span className="status-label">Stock Out</span></td>
                                <td>{62 + index}</td>
                                <td>

                                    <button 
                                        className="edit-button"
                                        onClick={() => this.openModal(item.id, item.title)}
                                    >
                                        <FaEdit />
                                    </button>
                                    <button 
                                        className="delete-button" 
                                        onClick={() => this.deleteTask(item.id)}
                                    >
                                        <MdDeleteForever />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className ="input-form" >
                    <FormInput add={this.addTask} />
                </div>
                <div>
                    <EditModal 
                    edit={this.state.isEdit}
                    close={this.closeModal }
                    change ={this.setTitle }
                    data={this.state.editData }
                    update={this.update} />
                </div>
            </div>

        )
    }
}

export default Program;

const buttonItem = {
    display: "flex",
    }
    const todoItem ={
    background : "white",
    color : "#fff",
    display: "flex",
    alignItems : "center",
    height : "1 rem",
    padding : "0 1rem",
    justifyContent : "space-between",
    margin : "0.5rem 0",
    }
    const inputForm ={
    background : "white",
    color : "#fff",
    display: "flex",
    alignItems : "center" 
}