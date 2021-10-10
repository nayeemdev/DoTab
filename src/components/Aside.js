import React from "react";

export default function Aside() {
    return (
        <>
        {/* Sidebar nav */}
        <aside className="col-12 col-md-12 col-lg-2">
            <div id="sidebox" className="sidebar box sticky-column">
            <ul className="nav js-tabs">
                <li className="nav__item"><a className="active" href="#tasks-tab"><i className="icon-list" />Tasks</a>
                </li>
                <li className="nav__item"><a href="#notes-tab"><i className="icon-file-text" />Notes</a></li>
                <li className="nav__item"><a href="#news-tab"><i className="icon-book" />News</a></li>
                <li className="nav__item"><a href="#community-tab"><i className="icon-users" />Community</a></li>
                <li className="nav__item"><a href="#settings-tab"><i className="icon-settings" />Settings</a></li>
            </ul>
            </div>
        </aside>
        </>
    );
}