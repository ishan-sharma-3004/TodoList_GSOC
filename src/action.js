export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const SET_TASK_COMPLETED = 'SET_TASK_COMPLETED';

export const SET_FILTER_STATUS = 'SET_FILTER_STATUS';
export const SET_FILTER_CATEGORY = 'SET_FILTER_CATEGORY';

export const SET_PRIORITY_SORT = 'SET_PRIORITY_SORT';

export const addTask = (title, category, priority, dueDate) => ({
  type: ADD_TASK,
  payload: { title, category, priority, dueDate },
});


export const setFilterStatus = (status) => ({
  type: SET_FILTER_STATUS,
  payload: status,
});

export const setFilterCategory = (category) => ({
  type: SET_FILTER_CATEGORY,
  payload: category,
});

export const setPrioritySort = (sortBy) => ({
  type: SET_PRIORITY_SORT,
  payload: sortBy,
});