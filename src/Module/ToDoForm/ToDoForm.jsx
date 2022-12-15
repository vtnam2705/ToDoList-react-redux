import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO } from '../../Store/Type/listToDoType';
import { v4 as uuid } from 'uuid';
import ToDoFormInput from '../ToDoFormInput/ToDoFormInput';
import ToDoList from '../../Component/ToDoList';
import ToDoListCompleted from '../../Component/ToDoListCompleted';
import "../ToDoForm/ToDoForm.css"
import { editAction, filterSearchAction, listToDoAction } from '../../Store/Action/listToDoAction';
import { editSelector, toDoListSelector } from '../../Store/Selectors/selectors';
import { BsSearch } from 'react-icons/bs';


export default function ToDoForm(props) {
    // states
    const [input, setInput] = useState('');
    const [noti, setNoti] = useState({});
    const [completed, setCompleted] = useState([]);
    const [edit, setEdit] = useState(null);


    const dispatch = useDispatch();
    const data = useSelector(toDoListSelector);
    const editTodo = useSelector(editSelector);
    // console.log(editTodo)

    const letterStyle = {
        fontSize: '18px',
        fontWeight: '500'
    }

    //Get date and time when adding new todos
    let date = new Date();
    let current_date = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
    let current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
    let date_time = current_date+" "+current_time;

    // object list 
    const list = {
        id: Math.floor(Math.random() * 100),
        todo: input,
        date: date_time,
        isCompleted: false,
        isEdited: false
    }


    // Feature 
    const handleChange = (e) => {
        setInput(e.target.value);
        // setEdit(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(listToDoAction(list))
        // setInput('')
       
        if (input === '') {
            setNoti({
                message: 'Please fill out space!!!',
                css: 'd-block'
            })
        } else {
            dispatch(listToDoAction(list))
            setInput('')
            setNoti({
                message: 'Please fill out space!!!',
                css: 'd-none'
            })
        }
    }

    const handleUpdate = () => {
         const updateToDo = [...data].find(todos => {
            if(editTodo.id === updateToDo.id) {
                todos.todo = edit
            }
        })
    }

    const toggleCompleted = (id) => {
        const completedTodo = [...data].find((todo) => {
            if(todo.id === id) {
                todo.isCompleted = !todo.isCompleted
            }
        }) 
    }

    const handleChangeEdit = (e) => {
        setEdit(e.target.value);
        console.log(edit);
    }


    const textChange = (e) => {
        // setSearch(e.target.value);
        dispatch(filterSearchAction(e.target.value))
    }


    return (
        <>
            <div className='form shadow-lg bg-white rounded mt-4'>
                <h4 className='text-center'>To Do List</h4>

                <input className='form-control mt-3 mb-4' placeholder='Search' onChange={textChange} />

                <div className='d-flex justify-content-center flex-column'>
                    <ToDoList
                        todos={data}
                        // handleEdit={handleEdit}
                        // onCompleted={toggleCompleted}
                        cssLetter={letterStyle}
                    />
                    <br />
                    <ToDoListCompleted
                        // completedArray={completed}
                        cssLetter={letterStyle}
                    />
                    <br />
                    <ToDoFormInput
                        submit={handleSubmit}
                        changeValue={handleChange}
                        changeValueEdit={handleChangeEdit}
                        notification={noti}
                        // cssStyle={buttonStyle}
                        edit={editTodo}
                        input={input}
                    />
                </div>
            </div>
        </>
    )
}
