import React from "react";

export default function Notes() {
    return (

        <>
            {/* NOTES */}
            <div id="notes-tab" className="tabcontent">
            <div className="pb-2">
              <h1 className="title title--h1 first-title title__separate">NOTES</h1>
              <div className="note-header">
                <div className="note-content">
                  <div className="note-input">
                    <textarea className="note-input-text-asd textarea form-control m-1 get-note" rows={3} placeholder="// Write a note here" spellCheck="false" defaultValue={""} />
                    <div className="note-action m-3">
                      <input type="color" defaultValue="#0055FF" className="color-picker get-color" />
                      <button className=" btn m-1 " id="add-btn">Add note</button>
                    </div>
                  </div>
                </div> 
              </div>
              <div className="notes-list mt-3">
                <div className="note" style={{backgroundColor: '#ccffcc'}}>
                  <div className="note-view">
                    hello
                  </div>
                  <div>
                    <a className="note-delete"><i className="fas fa-trash-alt" /></a>
                  </div>
                </div>
                <div className="note" style={{backgroundColor: '#ccffcc'}}>
                  <div className="note-view">
                    hello
                  </div>
                  <div>
                    <a className="note-delete"><i className="fas fa-trash-alt" /></a>
                  </div>
                </div>
                <div className="note" style={{backgroundColor: '#ccffcc'}}>
                  <div className="note-view">
                    hello
                  </div>
                  <div>
                    <a className="note-delete"><i className="fas fa-trash-alt" /></a>
                  </div>
                </div>
                <div className="note" style={{backgroundColor: '#ccffcc'}}>
                  <div className="note-view">
                    hello
                  </div>
                  <div>
                    <a className="note-delete"><i className="fas fa-trash-alt" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </>

    );
}