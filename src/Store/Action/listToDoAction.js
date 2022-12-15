import { ADD_TODO, DELETE_TODO, EDIT_TODO, FILTER_SEARCH, LIST_DONE, LIST_REMOVE_DONE, DELETE_COMPLETED_TODO } from "../Type/listToDoType"

const listToDoAction = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

const deleteToDoAction = (name) => {
    return {
        type: DELETE_TODO,
        payload: name
    }
}


const editAction = (todo) => {
    return {
        type: EDIT_TODO,
        payload: todo
    }
}


const completedAction = (name) => {
    return {
        type: LIST_DONE,
        payload: name
    }
}

const incompleteAction = (name) => {
    return {
        type: LIST_REMOVE_DONE,
        payload: name
    }
}

const deleteCompletedAction = (id) => {
    return {
        type: DELETE_COMPLETED_TODO,
        payload: id
    }
}

const filterSearchAction = (text) => {
    return {
        type: FILTER_SEARCH,
        payload: text,
    }
}



export { listToDoAction, deleteToDoAction, completedAction, incompleteAction, filterSearchAction, editAction, deleteCompletedAction }