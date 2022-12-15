import React, { useEffect, useState } from 'react'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { BsClipboardCheck } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { isRepeatSelector, toDoListSelector } from '../Store/Selectors/selectors';
import { completedAction, deleteToDoAction, editAction } from '../Store/Action/listToDoAction';
import Added from '../Layouts/Notification/isAdded';
import Empty from '../Layouts/Notification/isEmpty';

export default function ToDoList({ cssLetter, todos, onCompleted }) {
    const dispatch = useDispatch();
    const todoList = useSelector(toDoListSelector);
    const isRepeat = useSelector(isRepeatSelector)
    // const { listToDo, repeat } = data;


    // todos, 
    const handleDelete = (name) => {
        dispatch(deleteToDoAction(name));
    }

    const handleCompleted = (name) => {
        dispatch(completedAction(name));
        // console.log(name)
    }

    const handleEdit = (index) => {
        dispatch(editAction(index));
    }

    return (
        <div>
            <h5 className='text-left'>List To Do</h5>
            <ul className='p-0 mt-3'>
                {isRepeat && <Added />}
                {todoList?.length == 0 ? <Empty /> : todoList?.map((item, idx) => {
                    return (
                        <li
                            key={idx}
                            style={{
                                listStyle: 'none',
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                borderRadius: '5px',
                                padding: '10px 10px'
                            }}
                            className='d-flex justify-content-between align-items-center mb-2 bg-white'
                        >
                            <div>
                                <p style={cssLetter} className='m-0'>{item.todo}</p>
                                <span>Added: {item.date}</span>
                            </div>
                            <div>
                                <button type='button' className='btn btn-success mr-2' onClick={() => handleEdit(item)}>
                                    <AiOutlineEdit style={{ fontSize: '18px' }} />
                                </button>
                                {/* {todoList} */}
                                <button type='button' className='btn btn-warning mr-2' onClick={() => handleCompleted(item)}>
                                    <BsClipboardCheck style={{ fontSize: '18px' }} />
                                </button>
                                <button type='button' className='btn btn-danger delete-icon' onClick={() => handleDelete(item.todo)} >
                                    <MdOutlineDeleteOutline style={{ fontSize: '20px' }} />
                                </button>
                            </div>
                        </li>
                    )
                })
                }
            </ul>
            <p className='text-center'>
                Have
                <span className='fw-3'> {todoList?.length} </span>
                <span>{todoList?.length > 1 ? 'Todos' : 'Todo'}</span>
            </p>
        </div>
    )
}