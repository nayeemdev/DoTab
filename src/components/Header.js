import React from "react";

export default function Header() {
    return (
        <>
        <header className="header box">
            <div className="header__left">
            <div className="header__photo">
                <img className="header__photo-img" src="assets/img/logo/logo.png" alt="DoTab" />
            </div>
            <div className="header__base-info text-center w-100">
                <div className="status text-white dateTime">{new Date().toLocaleString() + ''}</div>
                <p>Something will appear here in later.........</p>
            </div>
            </div>
        </header>
        </>
    );
}