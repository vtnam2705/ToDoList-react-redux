import { ADD_TODO, DELETE_TODO, EDIT_TODO, FILTER_SEARCH, LIST_DONE, LIST_REMOVE_DONE, UPDATE_TODO } from "../Type/listToDoType"

const initialState = {
    listToDo: [],
    listCompleted: [],
    repeat: false,
    edit: '',
    filter: {
        search: ''
    }
}

export const listReducer = (state = initialState, {type, payload}) => {
    switch (type) {
    case ADD_TODO: {
        const newList = payload;
        const checkName = state.listToDo.find(item => item.todo === payload.todo);
        if (!checkName) {
            return {
                ...state,
                repeat: false,
                listToDo: [
                    ...state.listToDo,
                    newList
                ]
            }
        } else {
            return {
                ...state,
                repeat: true,
            }
        }
    }
    case DELETE_TODO: {
        return {
            ...state,
            listToDo: state.listToDo.filter((item) => item.todo !== payload)
        }
    }
    case FILTER_SEARCH: {
        return {
            ...state,
            filter: {
                ...state.filter,
                search: payload
            }
        }
    }
    case EDIT_TODO: {
        const findTodo = state.listToDo.find(item => item.id === payload.id);
        findTodo.isEdited = !findTodo.isEdited;
        state.edit = payload;
        return {
            ...state
        }
    }
    case UPDATE_TODO: {
        const data = [...state.listToDo];
        const index = data.findIndex(ele => payload.todo === ele.todo);
        if (index !== -1) {
            data[index] = payload
        }
        state.listToDo = data;
        return {
            ...state
        }
    }
    case LIST_DONE: {
        const existToDo = state.listToDo.find(item => item.id === payload.id);
        existToDo.isCompleted = !existToDo.isCompleted;
        if (existToDo.isCompleted === true) {
            return {
                ...state,
                listToDo: state.listToDo.filter((x) => x.isCompleted !== true),
                listCompleted: [...state.listCompleted].concat(existToDo)
            }
        }
    }
    case LIST_REMOVE_DONE: {
        const existToDo = state.listCompleted.find(item => item.id === payload.id);
        existToDo.isCompleted = !existToDo.isCompleted;
        if (existToDo.isCompleted === false) {
            return {
                ...state,
                listToDo: [...state.listToDo].concat(existToDo),
                listCompleted: state.listCompleted.filter((x) => x.isCompleted !== false)
            }
        }
    }
    case "DELETE_COMPLETED_TODO": {
        return {
            ...state,
            listCompleted: state.listCompleted.filter(item => item.id !== payload)
        }
    }
    default:
        return state
    }
}
