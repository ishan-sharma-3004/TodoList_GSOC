import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { uploadTask, deleteTask } from '../Redux/Actions'
import EditTask from './EditTask'
import "../styles/Task.css"



function Task({ taskData, index }) {

    const dispatch = useDispatch()

    const handleDone = () => {
        dispatch(uploadTask({
            id: taskData.id
        }))
    }

    const handleDelete = () => {
        dispatch(deleteTask({
            id: taskData.id
        }))
    }

    return (
        <div className='task-display list'>

            <div className='task-content'>
                <h5 style={{ textDecoration: taskData.isDone ? "line-through" : "none" }}>{`${index + 1}/- ${taskData.description}`}</h5>
            </div>
            <div className='inter-reaction'>

                <a style={{ cursor: "pointer" }} onClick={handleDone}>{taskData.isDone ? <img src="https://img.icons8.com/emoji/48/000000/check-box-with-check-emoji.png" width="28%" /> : <img src="https://img.icons8.com/emoji/48/000000/check-mark-button-emoji.png" width="28%" />}</a>
                <img style={{ cursor: "pointer" }} onClick={handleDelete} src="https://img.icons8.com/emoji/48/000000/cross-mark-button-emoji.png" width="28%" />

                <EditTask taskData={taskData} />
            </div>

        </div>
    )
}




export default Task