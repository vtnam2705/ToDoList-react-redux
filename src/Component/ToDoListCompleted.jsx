import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { BsClipboardCheck } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { listCompletedSelector } from '../Store/Selectors/selectors';
import { incompleteAction, deleteCompletedAction } from '../Store/Action/listToDoAction';
// import Completed from '../Layouts/Notification/isCompleted';
import Completed from '../Layouts/Notification/isCompleted.jsx';


export default function ToDoListCompleted(props) {
    const { cssLetter } = props;
    const dispatch = useDispatch();
    const listCompleted = useSelector(listCompletedSelector);


    const handleUncompleted = (todo) => {
        dispatch(incompleteAction(todo));
    }

    const handleDeleteCompleted = (id) => {
        dispatch(deleteCompletedAction(id))
    }
    return (
        <div>
            <h5 className='text-left'>Task Completed</h5>
            <ul className='p-0 mt-3'>
                {listCompleted?.length == 0 ? <Completed /> : listCompleted.map((todos, idx) => (
                    <li
                        key={idx}
                        style={{
                                listStyle: 'none',
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                borderRadius: '5px',
                                padding: '10px 10px'
                        }}
                        className='d-flex justify-content-between align-items-center mb-2'
                    >
                        <p style={cssLetter} className='m-0'>{todos.todo}</p>
                        <div>
                            <button type='button' className='btn btn-success mr-2' onClick={() => handleUncompleted(todos)}>
                                <BsClipboardCheck style={{ fontSize: '18px' }} />
                            </button>
                            <button type='button' className='btn btn-danger' onClick={() => handleDeleteCompleted(todos.id)}>
                                <MdOutlineDeleteOutline style={{ fontSize: '20px' }} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
