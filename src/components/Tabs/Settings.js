import React from 'react'


export default function Settings() {
    return (
        <>
            {/* SETTINGS */}
            <div id="settings-tab" className="tabcontent">
            <div className="pb-2">
              <h1 className="title title--h1 first-title title__separate">Settings</h1>
              {/* Settings Form */}
              <div className="row">
                <label htmlFor="defaultTab" className="col-md-6 my-auto h5">Select Defalut Tab</label>
                <div className="col-md-6">
                    <div className="form-group my-auto">
                      <select name="defaultTab" className="form-control custom-select" id="defaultTab">
                        <option value="tasks">Tasks</option>
                        <option value="notes">Notes</option>
                        <option value="news">News</option>
                        <option value="community">Community</option>
                      </select>
                    </div>
                </div>
              </div>
              
              <div className="row mt-4">
                <div className="col-md-12 text-center">
                    <button className="btn btn-primary px-5">Save Changes</button>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}