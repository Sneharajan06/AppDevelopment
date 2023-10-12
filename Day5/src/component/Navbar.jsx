import React from "react";
function Dash(prop) {
    return (
        <div
            onClick={() => {
                prop.nav(false);
            }}
        >
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
function Open(prop) {
    return (
        <>
            <div
                className="nav-bar-dash-open-close"
                onClick={() => {
                    prop.nav(true);
                }}
            >
                <div></div>
                <div></div>
            </div>

            <div className="nav-bar-dash-items">
                <div
                    className="nav-bar-dash-item">
                    <p
                    onClick={() => {
                        window.location.href= "http://localhost:3000/Profile"
                    }}>Profile</p>
                </div>
                    <div
                    className="nav-bar-dash-item">
                        <p
                         onClick={() => {
                        window.location.href= "http://localhost:3000/Aboutus"
                    }}>About us</p>
                    </div>
                    <div
                    className="nav-bar-dash-item">
                        <p
                         onClick={() => {
                        window.location.href= "http://localhost:3000/Contactus"
                    }}>Contact us</p>
                    </div>
                    <div
                    className="nav-bar-dash-item">
                        <p
                         onClick={() => {
                        window.location.href= "http://localhost:3000/dashboard"
                    }}>Analysis</p>
                    </div>
            </div>
        </>
    );
}

function NavBar(prop) {
    let [nav, setNav] = React.useState(true);
    return (
        <>
            <div className="nav-bar">
                <div className={nav ? "nav-bar-dash-close" : "nav-bar-dash-open"}>
                    {nav ? (
                        <Dash nav={setNav} />
                    ) : (
                        <Open nav={setNav} />
                    )}
                </div>
            </div>
        </>
    );
}

export { NavBar };
