import React, { Component } from 'react';

import AuditCalendar from '../containers/audit-calendar';

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <AuditCalendar />
            </div>
        );
    }
}

export default App;
