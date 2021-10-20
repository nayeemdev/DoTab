import React, {useState, useEffect} from 'react';



export default function Header() {
    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000);
    }, []);

    return (
        <>
        <header className="header box">
            <div className="header__left">
            <div className="header__photo">
                <img className="header__photo-img" src="assets/img/logo/logo.png" alt="DoTab" />
            </div>
            <div className="header__base-info text-center w-100">
                <div className="status text-white dateTime">
                {dateState.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                 })}
                 { ' ' }
                 {dateState.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: true,
                })}
                </div>
                <p>Something will appear here in later.........</p>
            </div>
            </div>
        </header>
        </>
    );
}