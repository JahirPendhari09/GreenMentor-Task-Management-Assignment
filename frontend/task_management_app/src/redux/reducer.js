import React from 'react'
import { DELETE_TASK, ERROR, GET_TASKS, LOADING,  PATCH_TASK,  POST_TASKS } from './actionTypes'

const initialState ={
    tasks :[],
    user:{},
    isLoading:false,
    isError:false,
    token:"",
    isAuth:false
}

 export const reducer = (state=initialState, {type,payload}) => {
    switch(type){
        case LOADING: {
            return {...state, isLoading:true}
        }
        case ERROR: {
            return {...state, isLoading:false, isError:true}
        }
        case GET_TASKS: {
            return {...state, isLoading:false, tasks:payload}
        }
        case POST_TASKS: {
            return {...state, isLoading:false, tasks:[...state.tasks,payload]}
        }
        case PATCH_TASK: {
            return {...state, isLoading:false}
        }
        case DELETE_TASK: {
            return {...state, isLoading:false}
        }
        default : {
            return state 
        }
    }
}