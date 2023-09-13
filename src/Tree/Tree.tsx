import React from 'react';
import logo from './logo.svg';
import './App.css';

function Tree() {
    return (
        <div className="Tree">
            <header className="Tree-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    My first Project
                </p>
            </header>
            <main>
                <section className="Tree-hero-section">
                    <p>
                        starting at <time>2023-09-11</time>
                    </p>
                    <p>
                        give me a one year and I take it all
                    </p>
                </section>
            </main>
        </div>
    );
}

export default Tree;
