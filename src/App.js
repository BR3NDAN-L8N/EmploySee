import React from 'react';

import RenderTable from './components/Table';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    EmploySee
                </h1>
                <h2>
                    The easy way to see employees.
                </h2>
            </header>
            <main>
                <RenderTable />
            </main>
        </div>
    );
}

export default App;
