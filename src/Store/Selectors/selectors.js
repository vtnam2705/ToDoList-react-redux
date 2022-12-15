export const toDoListSelector = (state) => {
    const searchText = filterSelector(state)

    const todoSearch = state.listToDo.filter((item) => {
        return item.todo.toLowerCase().includes(searchText);
    })

    return todoSearch;
};

export const filterSelector = (state) => state.filter.search

export const isRepeatSelector = (state) => state.repeat

export const editSelector = (state) => state.edit

export const listCompletedSelector = (state) => state.listCompleted