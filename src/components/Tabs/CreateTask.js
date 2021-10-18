import React, { useState } from "react";

const CreateTodo = ({createNewTask}) => {
    const [label, setLabel] = useState('');

    const handleCreateTask = (label) => {
        createNewTask(label);
        setLabel('')
    }

    return (
        <div className="col-12 col-md-12 col-lg-6">
            <div className="input-group mb-3">
            <input type="text"
                onChange={ e => setLabel(e.target.value)} value={label} 
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        handleCreateTask(label)
                    }
                }}
                className="form-control add-task" placeholder="Whats on your task list today?" 
                aria-label="Whats on your task list today? "
            />
            <div className="input-group-append">
                <button className="btn input-group-text" onClick={ () => handleCreateTask(label)}>
                ADD
                </button>
            </div>
            </div>
        </div>
    )
}

export default CreateTodo;