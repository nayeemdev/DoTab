import React from 'react';
import useTodos from '../../services/TaskService';
import CreateTodo from './CreateTask';

const Tasks = () => {
    const [ todos, addTodo, setTodoCompleted, removeTodo] = useTodos();
    
    return (
        <>
        {/* TASKS */}
        <div id="tasks-tab" className="tabcontent active">
        <div className="pb-2">
          <h1 className="title title--h1 first-title title__separate">TASKS</h1>
          <div className="row">
            <CreateTodo createNewTask={addTodo}/>
            <div className="col-12 col-md-12 col-lg-6">
              <div className="todo-count">{todos.length} Available Tasks </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-white border-0">
                <div className="card-body">
                  {/* <ul className="nav nav-pills todo-nav">
                    <li role="presentation" className="nav-item all-task"><a href="#" className="nav-link">All</a></li>
                    <li role="presentation" className="nav-item active-task active"><a href="#" className="nav-link">Active</a></li>
                    <li role="presentation" className="nav-item completed-task"><a href="#" className="nav-link">Completed</a></li>
                    </ul> 
                  */}
                  <div className="todo-list">
                    { todos.length === 0 ?
                        <div className="text-center">
                          <p>No Taks Found!</p>
                        </div>
                      :
                      todos.map( todo => (
                        <>
                        <div className="row">
                            <div className="col-md-11">
                            <div key={todo.id} className="todo-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" onChange={() => setTodoCompleted(todo.id, !todo.completed)}  checked={todo.completed} className="custom-control-input" id={todo.id}/>
                              <label className="custom-control-label" htmlFor={todo.id}>{ todo.label }</label>
                            </div>
                          </div>
                            </div>
                            <div className="col-md-1 my-auto">
                              <button onClick={ () => removeTodo(todo.id)} className="float-right bg-dark text-danger"><i className="fas fa-trash-alt" /></button>
                            </div>
                        </div>
                        </>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}

export default  Tasks;