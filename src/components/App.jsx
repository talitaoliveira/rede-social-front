import React from 'react';

import Header from './Header';
import Projects from './Projects';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Projects />
            </div>
        );
    }
}

export default App;