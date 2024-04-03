import React, { useState } from 'react'
import { Modal, Button, FormControl } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { editTask } from "../Redux/Actions"


function EditTask({ taskData }) {
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newDescription, setNewDescription] = useState("")
    const handleChange = (e) => {
        setNewDescription(e.target.value)
    }
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editTask({
            id: taskData.id,
            newDescription: newDescription
        }))
        handleClose()
    }


    return (
        <>

            <img style={{ cursor: "pointer" }} onClick={handleShow} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABXUlEQVRIie3Vr07EQBAG8G8KutOzOAQSh7urghASNK9BggLHXkIIPAX2DC+A7ZYgcDgECQKBIbuF5ByDoaSl/2GXhOQ+151tf+l2dgss8p9jdXRgNb8YzXdG80bdHHKOJpECyXFxCJAdnmQ33uAa9KskwFY0sbf5QOASbgkDuCgOOIU5NgpC07oaAStOYZtEyiaR6sbp5LdWGdUsVrNkKZ8Vaybhw7xm07Dy3X/cXLWNJDTl2KjSHHyuggu4pXtBhPNwbI+6njEYbkOH4IOaqw8KAAKZd83p/cZ9UZAoHme1W2ow7BrtBftAO2FfaCvsE22ETcrbJJgBGLXe/e3AGJLa7RSN7RVI9n2hjTAAiNCzL7QVDuT90Rdagd+uR+v5wR7Gr/cIZE0Im0LYE2DuCq0k03xqNUvx/5rHpuGuS6vU1VbzA4BVAM6WtCnL5Ut5AogImAVLdOkLXeRP8wEhVraDPQ9f1wAAAABJRU5ErkJggg==" width="28%"></img>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>Edit Task</Modal.Body>
                <FormControl
                    type="text"
                    placeholder="Enter a todo..."
                    className="input-add"
                    defaultValue={taskData.description}
                    onChange={handleChange}
                />
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default EditTask