import React from 'react';

function HeaderComponent(props) {
    return (

        <div>
            <nav className="navbar navbar-expand-lg bg-primary mb-3">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="/">Fig Finance Event</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                </div>
            </nav>
        </div>
    );
}

export default HeaderComponent;
