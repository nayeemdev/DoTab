import React from 'react'

export default function Tasks() {
    return (
        <>
        {/* TASKS */}
        <div id="tasks-tab" className="tabcontent active">
        <div className="pb-2">
          <h1 className="title title--h1 first-title title__separate">TASKS</h1>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <form>
                <div className="input-group mb-3">
                  <input type="text" className="form-control add-task" placeholder="Whats on your task list today?" aria-label="Whats on your task list today? " />
                  <div className="input-group-append">
                    <button className="btn input-group-text">ADD</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <div className="todo-count">15 Active Tasks </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-white border-0">
                <div className="card-body">
                  <ul className="nav nav-pills todo-nav">
                    <li role="presentation" className="nav-item all-task"><a href="#" className="nav-link">All</a></li>
                    <li role="presentation" className="nav-item active-task active"><a href="#" className="nav-link">Active</a></li>
                    <li role="presentation" className="nav-item completed-task"><a href="#" className="nav-link">Completed</a></li>
                  </ul>
                  <div className="todo-list">
                    <div className="todo-item">
                      <div className="checker"><span><input type="checkbox" /></span></div>
                      <span>Create theme</span>
                      <button className="float-right remove-todo-item"><i className="fas fa-trash-alt" /></button>
                    </div>
                    <div className="todo-item">
                      <div className="checker"><span><input type="checkbox" /></span></div>
                      <span>Work on wordpress</span>
                      <button className="float-right remove-todo-item"><i className="fas fa-trash-alt" /></button>
                    </div>
                    <div className="todo-item">
                      <div className="checker"><span><input type="checkbox" /></span></div>
                      <span>Organize office main department</span>
                      <button className="float-right remove-todo-item"><i className="fas fa-trash-alt" /></button>
                    </div>
                    <div className="todo-item">
                      <div className="checker"><span><input type="checkbox" /></span></div>
                      <span>Error solve in HTML template</span>
                      <button className="float-right remove-todo-item"><i className="fas fa-trash-alt" /></button>
                    </div>
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