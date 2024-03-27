import axios from "axios";
import { DELETE_TASK, ERROR, GET_TASKS, LOADING,  PATCH_TASK,  POST_TASKS } from "./actionTypes";
export const getTasks = (token) => (dispatch) => {
    dispatch({ type: LOADING });
    fetch("https://backend-greenmentor.onrender.com/tasks", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    }).then(res => res.json())
        .then(res => {
            dispatch({type:GET_TASKS,payload:res})
            // console.log(res, "data");
        })
        .catch(err => dispatch({ type: ERROR }));
};

export const postTasks = (newTask,token) => (dispatch) => {
    dispatch({ type: LOADING });
    fetch("https://backend-greenmentor.onrender.com/tasks/create",{
        method:"POST",
        headers:{
            "Content-type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body: JSON.stringify(newTask) 
    }).then(res=> res.json())
    .then(res=> dispatch({type:POST_TASKS,payload:newTask}))
    .catch(err=> dispatch({ type: ERROR }));
};

export const patchTask = (id,updatedTask,token) => (dispatch) => {
    return (dispatch({ type: LOADING }),
    fetch(`https://backend-greenmentor.onrender.com/tasks/update/${id}`,{
        method:"PATCH",
        headers:{
            "Content-type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body: JSON.stringify(updatedTask) 
    }).then(res=> res.json())
    .then(res=> dispatch({type:PATCH_TASK}))
    .catch(err=> dispatch({ type: ERROR }))
    )
};

export const deleteTask = (id,token) => (dispatch) => {
    return (dispatch({ type: LOADING }),
    fetch(`https://backend-greenmentor.onrender.com/tasks/delete/${id}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    }).then(res=> res.json())
    .then(res=> dispatch({type:DELETE_TASK}))
    .catch(err=> dispatch({ type: ERROR })))
};