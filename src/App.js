import React from 'react';
// import 'index.css';
import Table from "./components/Table";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    EmploySee
                </h1>
                <h2>
                    The easy way to see employees.
                </h2>
                <p>
                    View Employees
                </p>

            </header>
            <Table />
        </div>
    );
}

export default App;
