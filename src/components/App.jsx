import React from 'react';

import Header from './Header';
import Project from './Project';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Project />
            </div>
        );
    }
}

export default App;