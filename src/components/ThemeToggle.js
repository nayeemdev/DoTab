import React from "react";

export default function ThemeToggle() {
    return (
        <>
            {/* Dark/Light Toggle */}
            <div className="dark-light m-3">
            <div className="btn-group" role="group">
              <button data-toggle="tooltip" title="Switch to Light Mode" type="button" className="btn toggle-btn light"><i className="fas fa-sun" /></button>
              <button data-toggle="tooltip" title="Switch to Dark Mode" type="button" className="btn toggle-btn dark"><i className="fas fa-moon" /></button>
            </div>
          </div>
        </>
    );
}