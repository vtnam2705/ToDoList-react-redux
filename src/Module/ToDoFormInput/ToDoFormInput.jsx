import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listToDoAction } from '../../Store/Action/listToDoAction';
import "../ToDoFormInput/ToDoFormInput.css"

export default function ToDoFormInput({ submit, changeValue, changeValueEdit, notification, cssStyle, edit, input }) {
    // console.log(edit)
    // useEffect(() => {
    //     setEdit(editTodo.todo)
    // }, [input])
    return (
        <div>
            <form onSubmit={submit}>
                <div className='form-input'>
                    <input
                        className='form-control'
                        name='todo'
                        onChange={changeValue}
                        value={input}
                        placeholder="Add new todo"
                    />
                    <button
                        type='submit'
                        className=
                        {
                            input == ''
                            ? 'btn btn-warning disabled'
                            : 'btn btn-success'
                        }
                    >
                        Add
                    </button>
                </div>
                    
                    {/*{edit !== ''
                        ? <>
                            <input
                                className='form-control'
                                name='todo'
                                onChange={changeValueEdit}
                                value={edit.todo}
                                placeholder="Edit here"
                            />
                            <button
                                type='submit'
                                className={
                                    input !== ''
                                        ? 'btn btn-success'
                                        : 'btn btn-warning disabled'}
                            >
                                Update
                            </button>
                        </>

                        : <>
                            <input
                                className='form-control'
                                name='todo'
                                onChange={changeValue}
                                value={input}
                                placeholder="Add new todo"
                            />
                            <button
                                type='submit'
                                className=
                                {
                                    input == ''
                                        ? 'btn btn-warning disabled'
                                        : 'btn btn-success'
                                }
                            >
                                Add
                            </button>
                        </>
                    }*/}
                <p className={notification.css} style={{ color: 'red', fontSize: '600' }}>{notification.message}</p>
            </form>
        </div>
    )
}
